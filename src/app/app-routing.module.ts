import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './userDetail/userDetail.component';
import { CommentPageComponent } from './commentPage/commentPage.component';

const routes: Routes = [
  { path: 'home', component: UserDetailComponent },
  { path: 'commentPage/:userName', component: CommentPageComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
