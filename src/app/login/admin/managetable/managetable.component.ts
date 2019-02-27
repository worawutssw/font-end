import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-managetable',
  templateUrl: './managetable.component.html',
  styleUrls: ['./managetable.component.css']
})
export class ManagetableComponent implements OnInit {
  @ViewChild('csvData') _file: ElementRef;
  private data: any;
  private fileData;
  listtable;
  listterm;
  liststdgroup;
  emptyData = [
    {
      Day:"SUN",
      Room:"",
      Sec:"",
      Subject_id:"",
      Subject_name:"",
      Subject_unit:"",
      Teacher:"",
      Term:"",
      Time:"(01-13)"
    },
    {
      Day:"MON",
      Room:"",
      Sec:"",
      Subject_id:"",
      Subject_name:"",
      Subject_unit:"",
      Teacher:"",
      Term:"",
      Time:"(01-13)"
    },
    {
      Day:"TUE",
      Room:"",
      Sec:"",
      Subject_id:"",
      Subject_name:"",
      Subject_unit:"",
      Teacher:"",
      Term:"",
      Time:"(01-13)"
    },
    {
      Day:"WED",
      Room:"",
      Sec:"",
      Subject_id:"",
      Subject_name:"",
      Subject_unit:"",
      Teacher:"",
      Term:"",
      Time:"(01-13)"
    },
    {
      Day:"THU",
      Room:"",
      Sec:"",
      Subject_id:"",
      Subject_name:"",
      Subject_unit:"",
      Teacher:"",
      Term:"",
      Time:"(01-13)"
    },
    {
      Day:"FRI",
      Room:"",
      Sec:"",
      Subject_id:"",
      Subject_name:"",
      Subject_unit:"",
      Teacher:"",
      Term:"",
      Time:"(01-13)"
    },
    {
      Day:"SAT",
      Room:"",
      Sec:"",
      Subject_id:"",
      Subject_name:"",
      Subject_unit:"",
      Teacher:"",
      Term:"",
      Time:"(01-13)"
    },
  ];

  public term = new FormControl('');
  public sec = new FormControl('');

  constructor(
    private service: LoginserviceService,
    private modalService: NgbModal,
    private papa: Papa,
  ) { }

  ngOnInit() {
    this.service.getsidplaytable().subscribe(
      (res) => {
        console.log(res);
        this.listtable = res;
      }
    )
    this.service.getterm().subscribe(
      (res) => {
        console.log(res);
        this.listterm = res;

      }
    )
    this.service.getstdgroup().subscribe(
      (res) => {
        console.log(res);
        this.liststdgroup = res;

      }
    )
    this.service.updateDisplay(this.emptyData).subscribe(
      (res) => {
        this.service.getsidplaytable().subscribe(
          (res) => {
            this.listtable = res;
          }
        )
      }
    )
  }

  openModal(upload) {
    this.modalService.open(upload, { centered: true })
    // this.modal.open(upload, { centered: true })
  }

  closeModal() {
    this.modalService.dismissAll()
  }



  onCSV() {
    const files = this._file.nativeElement.files;
    const blob: Blob = new Blob(files, { type: 'text/csv' });
    this.data = blob;

    const options = {
      header: true,
      complete: (results, file) => {
        this.fileData = results;
        console.log(this.fileData.data);
      },
    };
    this.papa.parse(this.data, options);
  }
  onAddFile() {
    if (!this.fileData || this.fileData.data.length <= 0) {
      alert('กรุณาเลือกไฟล์เพื่ออัพโหลด')
    }
    else {
      console.log(this.fileData.data)
      const data = {
        data: this.fileData.data
      }
      this.service.uploadtable(data).subscribe(
        (res) => {
          alert('อัพโหลดไฟล์สำเร็จ')

        }
      )
    }
  }

  gettable() {
    console.log(this.term, this.sec);

    this.service.gettableall(this.term.value, this.sec.value).subscribe(
      (res) => {
        console.log(res);
        let data = res;
        this.service.updateDisplay(this.emptyData).subscribe(
          (res) => {
            this.service.getsidplaytable().subscribe(
              (res) => {
                console.log(res);
                this.listtable = res;
                this.service.updateDisplay(data).subscribe(
                  (res) => {
                    this.service.getsidplaytable().subscribe(
                      (res) => {
                        this.listtable = res;
                      }
                    )                  }
                )
              }
            )
          }

        )
      }
    )
  }





}
