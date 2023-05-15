import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  comments: any;
  count: any;

  ngOnInit() {
    this.count = 0;
  }

  receiveComment($event: any) {
    this.comments = $event;
    this.count = this.comments.length;
    console.log(this.comments.length);
  }

  recieveCount($event: any) {
    this.comments = $event;
    this.count = this.comments.length;
  }
  
}
