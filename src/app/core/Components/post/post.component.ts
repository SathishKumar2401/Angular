import { Component, ComponentFactoryResolver, Directive, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ChildboxComponent } from '../childbox/childbox.component';


@Directive({
  selector: '[datacontainer]',
})

export class DatacontainerDirective {
  constructor(public viewcontainerRef: ViewContainerRef) {
  }
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() postComment: Array<any> = [];
  @Output() countComments = new EventEmitter();
  public loadComponent = false;
  public commentIndex = 0;
  public reply: Array<any> = [];
  currentDate = Date.now();
  @ViewChildren(DatacontainerDirective) entry!: QueryList<DatacontainerDirective>;


  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }


  ngOnChanges() {
    if (this.postComment !== undefined) {
      console.log('Main array====>', this.postComment);
    }
  }

  removeComment(no: any) {
    this.postComment.splice(no, 1);
    console.log('After remove array====>', this.postComment);
    this.countComments.emit(this.postComment);
  }

  replyComment(index: number) {
    this.loadComponent = true;
    const myFactory = this.resolver.resolveComponentFactory(ChildboxComponent);
    if (this.entry.toArray()[index].viewcontainerRef.length <= 0) {
      const myRef = this.entry.toArray()[index].viewcontainerRef.createComponent(myFactory);
      myRef.instance['commentNo'] = index;
      myRef.changeDetectorRef.detectChanges();
      myRef.instance.userReplycomment.subscribe(
        (data: any) => {
          console.log('Reply Data=>', data);
          this.receiveReplyComment(data, index);
        }
      );
      myRef.instance.deletNo.subscribe(
        no => {
          myRef.destroy();
        }
      );
    }
  }

  receiveReplyComment($event: any, i: any) {
    this.reply = $event;
    console.log($event);
    this.postComment.forEach((element: any) => {
      if (element['commentId'] === i) {
        element['replyComment'].push(...$event);
        console.log('Main array after reply comment=>', this.postComment);
      }
    });
    console.log(this.reply);
    this.loadComponent = false;
  }
}
