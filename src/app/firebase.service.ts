import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirebaseService {
    constructor(public db: AngularFirestore) {}

    submitComment(comments: any) {
        return this.db.collection('comments').doc('101').set({ comments });
    }
    getComment() {
        return this.db.collection('comments').snapshotChanges();
    }
    getCommentId() {
        return this.db.collection('commentId').snapshotChanges();
    }
    updateCommentId(commentId: number) {
        return this.db.collection('commentId').doc('101').set({ lastCommentId: commentId });
    }
}
