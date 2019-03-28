import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';

@Component({
  selector: 'app-usingroom',
  templateUrl: './usingroom.component.html',
  styleUrls: ['./usingroom.component.css']
})
export class UsingroomComponent implements OnInit {
  listcountroom;
  listTable;
  constructor(
    private Service : LoginserviceService
  ) {}

  ngOnInit() {
    this.Service.getcountroom().subscribe(
      (res) => {
        this.listcountroom = res;
      }
    )
  }
  onClick(data){
    this.Service.getusingroom(data).subscribe(
      (res) =>{
        console.log(res);
        this.listTable = res;
      }
    )
  }
}
