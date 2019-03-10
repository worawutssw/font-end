import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';


@Component({
  selector: 'app-using-chair',
  templateUrl: './using-chair.component.html',
  styleUrls: ['./using-chair.component.css']
})
export class UsingChairComponent implements OnInit {
  usingchair;

  constructor(
  private Service : LoginserviceService,
  ) { }

  ngOnInit() {
    this.Service.getusingchair().subscribe(
      (res) =>{
        this.usingchair = res;
      }
    )
  }

}
