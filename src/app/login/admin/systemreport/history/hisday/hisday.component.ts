import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';

@Component({
  selector: 'app-hisday',
  templateUrl: './hisday.component.html',
  styleUrls: ['./hisday.component.css']
})
export class HisdayComponent implements OnInit {
  
  public date = new FormControl('');
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
 
  selectdate(){
    console.log(this.date.value);
    this.service.gethistorydate(this.date.value).subscribe(
      (res)=>{
        this.listhisttory = res;
      }
    )
    
  }



}
