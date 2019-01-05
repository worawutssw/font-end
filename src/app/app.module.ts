import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal'
import { MaterialModule } from './material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './login/admin/admin.component';
import { ManageuserComponent } from './login/admin/manageuser/manageuser.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagetableComponent } from './login/admin/managetable/managetable.component';
import { ManagehardwareComponent } from './login/admin/managehardware/managehardware.component';
import { ManagerooomComponent } from './login/admin/managerooom/managerooom.component';
import { SystemreportComponent } from './login/admin/systemreport/systemreport.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ManageuserComponent,
    MainNavComponent,
    ManagetableComponent,
    ManagehardwareComponent,
    ManagerooomComponent,
    SystemreportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ModalModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
