import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginserviceService } from '../sevice/loginservice.service';
import { AuthenticationService } from '../sevice/authentication.service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    adminid : new FormControl(''),
    adminpw : new FormControl('')
  })
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private service:LoginserviceService,
    private authService:AuthenticationService,
    private route:Router
    ) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  login(){
    console.log(this.loginForm.value)
    this.service.loginAdmin(this.loginForm.value).subscribe(
      (res) => {
        console.log(res)
        this.authService.setActiveUser(res);
        this.route.navigate(['admin']);
        this.modalRef.hide();
      }
    ),
    (err) => {
      alert('ข้อมูลผิดพลาด')
    }
  }
}
