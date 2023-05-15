import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-childbox',
  templateUrl: './childbox.component.html',
  styleUrls: ['./childbox.component.scss']
})
export class ChildboxComponent {

  childForm!: FormGroup;
  replyComment: Array<object> = [];
  submitted: Boolean = false;
  @Output() userReplycomment = new EventEmitter();
  @Output() deletNo = new EventEmitter();
  @Input() commentNo: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    console.log('Comment no==>', this.commentNo);
  }

  createForm() {
    this.childForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
    });
  }

  onSubmit() {

    this.replyComment.push({
      currentDate: new Date(),
      commentTxt: this.childForm.controls['comment'].value
    });
    this.userReplycomment.emit(this.replyComment);
    this.deletNo.emit(this.commentNo);
  }


}
