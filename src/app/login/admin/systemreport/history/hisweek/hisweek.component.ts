import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';

@Component({
  selector: 'app-hisweek',
  templateUrl: './hisweek.component.html',
  styleUrls: ['./hisweek.component.css']
})
export class HisweekComponent implements OnInit {
  listhisttory;

  constructor(
    private service : LoginserviceService
  ) { }

  ngOnInit() {
    this.service.gethistory().subscribe(
      (res)=> {
        this.listhisttory = res;
      }
    )
  }

}
