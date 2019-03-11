import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';
import { delegateToClassInput } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-hismonth',
  templateUrl: './hismonth.component.html',
  styleUrls: ['./hismonth.component.css']
})
export class HismonthComponent implements OnInit {

  public month = new FormControl('')
 
 
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


  selectmonth(){
    console.log(this.month.value);
  
  }











}

