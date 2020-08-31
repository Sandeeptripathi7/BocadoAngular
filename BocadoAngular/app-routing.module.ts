import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'view-user', pathMatch: 'full' },  
  { path: 'view-user', component: UserComponent },  
  { path: 'add-user', component: AdminComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
