import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    public currentCommentId: number = 0;
    public editCommentId: number = 0;
    public userName: string = '';
    public comments: {
        id: number,
        userName: string,
        comment: string,
        timeStamp: string,
        children: [],
        reply: boolean
    }[] = [];
}
