import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'comment-unit',
  templateUrl: './commentUnit.component.html',
  styleUrls: ['./commentUnit.component.scss'],
})
export class CommentUnitComponent {
    @Input()
    public comments: {id: number, userName: string, comment: string, timeStamp: string, children: [], reply: boolean }[] = [];
    public edittedComment: string = '';
    public replyCommentId: number;
    public replyCommentString: string = '';

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public service: AppService,
        public firebaseService: FirebaseService) {
    }
    editComment(comment: any) {
        this.service.editCommentId = comment.id;
        this.edittedComment = comment.comment;
    }
    saveEdittedComment() {
        for (const each of this.comments) {
            if (each.id === this.service.editCommentId) {
                each.comment = this.edittedComment;
                each.timeStamp = new Date().toLocaleString();
                each.reply = false;
            }
        }
        this.updateComments();
        this.service.editCommentId = 0;
        this.edittedComment = '';
    }
    cancelEdit(comment) {
        if (comment.reply) {
            this.comments = this.comments.filter((each: any) => each.id !== comment.id);
        }
        this.service.editCommentId = 0;
        this.edittedComment = '';
    }
    replyComment(each) {
        this.service.currentCommentId += 1;
        each.children.push({
            id: this.service.currentCommentId,
            userName: this.service.userName,
            comment: '',
            timeStamp: new Date().toLocaleString(),
            children: [],
            reply: true
        });
        this.service.editCommentId = this.service.currentCommentId;
        this.edittedComment = '';
        this.updateCommentId();
    }
    updateCommentId() {
        this.firebaseService.updateCommentId(this.service.currentCommentId)
        .then((res: any) => {
            console.log('Comment Id Updated');
        });
    }
    updateComments() {
        this.firebaseService.submitComment(this.service.comments)
        .then(() => {});
    }
}
