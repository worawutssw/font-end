import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './login/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ManageuserComponent } from './login/admin/manageuser/manageuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagetableComponent } from './login/admin/managetable/managetable.component';
import { ManagehardwareComponent } from './login/admin/managehardware/managehardware.component';
import { ManagerooomComponent } from './login/admin/managerooom/managerooom.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'manageuser',
        component: ManageuserComponent
      },
      {
        path: 'managetable',
        component: ManagetableComponent
      },
      {
      path: 'managehardware',
      component: ManagehardwareComponent
      },
      {
        path: 'manageroom',
        component: ManagerooomComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
