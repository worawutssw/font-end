import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './login/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ManageuserComponent } from './login/admin/manageuser/manageuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagetableComponent } from './login/admin/managetable/managetable.component';
import { ManagehardwareComponent } from './login/admin/managehardware/managehardware.component';
import { ManagerooomComponent } from './login/admin/managerooom/managerooom.component';
import { SystemreportComponent } from './login/admin/systemreport/systemreport.component';
import { HomeComponent } from './login/admin/home/home.component';
import { ManagememberComponent } from './login/admin/managemember/managemember.component';
import { ConnectComponent } from './login/admin/systemreport/connect/connect.component';
import { HistoryComponent } from './login/admin/systemreport/history/history.component';
import { UsingChairComponent } from './login/admin/systemreport/using-chair/using-chair.component';
import { HisdayComponent } from './login/admin/systemreport/history/hisday/hisday.component';
import { HisweekComponent } from './login/admin/systemreport/history/hisweek/hisweek.component';
import { HismonthComponent } from './login/admin/systemreport/history/hismonth/hismonth.component';
import { HistermComponent } from './login/admin/systemreport/history/histerm/histerm.component';


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
      },
      {
        path: 'systemreport',
        component: SystemreportComponent,
        children:[
          {
            path: 'using_chair',
            component: UsingChairComponent
          },
          {
            path: 'history',
            component: HistoryComponent,
            children:[
              {
                path:'hisday',
                component: HisdayComponent
              },
              {
                path:'hisweek',
                component: HisweekComponent
              },
              {
                path:'hismonth',
                component: HismonthComponent
              },
              {
                path:'histerm',
                component: HistermComponent
              }
            ]
          },
          {
            path: 'connect',
            component: ConnectComponent
          }

        ]
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'managemember',
        component: ManagememberComponent
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
