import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-detail',
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.scss'],
})
export class UserDetailComponent {
    public userName: string = '';
    public errorMessage: boolean = false;
    constructor(public router: Router) {

    }
    submit() {
        if (this.userName.trim() === '') {
            this.errorMessage = true;
        } else {
            this.router.navigate(['/commentPage', this.userName.trim()]);
        }
    }
}
