import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  constructor(
    // private modal : NgbModal
  ) { }

  ngOnInit() {
  }


  // openModal(day) {

  //   this.modal.open(day, { centered: true })
  // }
  // closeModal() {
  //   this.modal.dismissAll()
  // }

}
