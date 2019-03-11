import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-histerm',
  templateUrl: './histerm.component.html',
  styleUrls: ['./histerm.component.css']
})
export class HistermComponent implements OnInit {
  listhisttory;


  constructor(
    private service: LoginserviceService
  ) { }

  public startdate = new FormControl('');
  public enddate = new FormControl('');

  ngOnInit() {
    this.service.gethistory().subscribe(
      (res) => {
        this.listhisttory = res;
      }
    )
  }

  selsctdate() {
    console.log(this.startdate.value, this.enddate.value);
    this.service.gethisdate(this.startdate.value, this.enddate.value).subscribe(
      (res) => {
        this.listhisttory = res;
      }


    )





  }

}
