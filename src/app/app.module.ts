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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './sevice/authentication.service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HomeComponent } from './login/admin/home/home.component';
import { ngxBoostarpModule } from './ngx-boostrap'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PapaParseModule } from 'ngx-papaparse';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { nebularModule } from './nebular';
import { ManagememberComponent } from './login/admin/managemember/managemember.component';
import { TabsModule, BsDatepickerModule, DatepickerModule, CarouselModule } from 'ngx-bootstrap';
import { UsingChairComponent } from './login/admin/systemreport/using-chair/using-chair.component';
import { HistoryComponent } from './login/admin/systemreport/history/history.component';
import { UsingroomComponent } from './login/admin/systemreport/usingroom/usingroom.component';
import { HisdayComponent } from './login/admin/systemreport/history/hisday/hisday.component';
import { HisweekComponent } from './login/admin/systemreport/history/hisweek/hisweek.component';
import { HismonthComponent } from './login/admin/systemreport/history/hismonth/hismonth.component';
import { HistermComponent } from './login/admin/systemreport/history/histerm/histerm.component';

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
    SystemreportComponent,
    HomeComponent,
    ManagememberComponent,
    UsingChairComponent,
    HistoryComponent,
    HisdayComponent,
    HisweekComponent,
    HismonthComponent,
    HistermComponent,
    UsingroomComponent
  ],
  imports: [
    PapaParseModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    nebularModule,
    ngxBoostarpModule,
    Ng2SearchPipeModule,
    NgxWebstorageModule.forRoot(),
    // NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    CarouselModule.forRoot()
  ],
  entryComponents:[HisdayComponent],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
