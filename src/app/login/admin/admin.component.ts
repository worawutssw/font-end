import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  
})
export class AdminComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("myNav").style.width = "260px";
    document.getElementById("box").style.backgroundColor = "rgba(0,0,0,0.3)";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("box").style.backgroundColor = "lightgrey";
  }
}
