import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.scss']
})
export class CommentboxComponent {

  commentForm!: FormGroup;
  commentInfo: Array<object> = [];
  submitted: Boolean = false;
  public id = 0;
  @Output() usercomment = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
    });
  }

  onSubmit() {

    this.commentInfo.push({
      commentId: this.id++,
      currentDate: new Date(),
      commentTxt: this.commentForm.controls['comment'].value,
      replyComment: []
    });
    this.usercomment.emit(this.commentInfo);

  }
}
