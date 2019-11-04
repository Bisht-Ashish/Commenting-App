import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'comment-page',
  templateUrl: './commentPage.component.html',
  styleUrls: ['./commentPage.component.scss'],
})
export class CommentPageComponent {
    public newComment: string = '';
    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public service: AppService, public firebaseService: FirebaseService) {
        this.service.userName = this.activatedRoute.snapshot.paramMap.get('userName');
        this.getComments();
        this.getCommentId();
    }
    changeUser() {
        this.router.navigate(['/home']);
    }
    getComments() {
        this.firebaseService.getComment()
        .subscribe((res: any) => {
            this.service.comments = res[0].payload.doc.data().comments;
        });
    }
    enterComment() {
        this.service.currentCommentId += 1;
        if (this.newComment.trim() !== '') {
            this.service.comments.push({
                id: this.service.currentCommentId,
                userName: this.service.userName,
                comment: this.newComment,
                timeStamp: new Date().toLocaleString(),
                children: [],
                reply: false
            });
            this.newComment = '';
            this.submitComment();
            this.updateCommentId();
        }
    }
    submitComment() {
        this.firebaseService.submitComment(this.service.comments)
        .then(() => {});
    }
    getCommentId() {
        this.firebaseService.getCommentId()
        .subscribe((res: any) => {
            this.service.currentCommentId = res[0].payload.doc.data().lastCommentId;
        });
    }
    updateCommentId() {
        this.firebaseService.updateCommentId(this.service.currentCommentId)
        .then(() => {
        });
    }
}
