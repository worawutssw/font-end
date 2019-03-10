import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';

@Component({
  selector: 'app-hismonth',
  templateUrl: './hismonth.component.html',
  styleUrls: ['./hismonth.component.css']
})
export class HismonthComponent implements OnInit {

 month = new FormControl('')
 listhisttory;





  constructor(
    private service : LoginserviceService
  ) { }

  


  ngOnInit() {
    this.service.gethistory().subscribe(
      (res) => {
        this.listhisttory = res;
      }
    )

  }

}
