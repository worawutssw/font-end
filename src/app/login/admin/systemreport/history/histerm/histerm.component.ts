import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';

@Component({
  selector: 'app-histerm',
  templateUrl: './histerm.component.html',
  styleUrls: ['./histerm.component.css']
})
export class HistermComponent implements OnInit {
  listhisttory;

  constructor(
    private service: LoginserviceService
  ) {}

  ngOnInit() {
    this.service.gethistory().subscribe(
      (res) => {
        this.listhisttory = res;
      }
    )
  }

}
