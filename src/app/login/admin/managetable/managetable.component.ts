import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

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
      Day: "SUN",
      Room: "",
      Sec: "",
      Subject_id: "",
      Subject_name: "",
      Subject_unit: "",
      Teacher: "",
      Term: "",
      Time: "(01-13)"
    },
    {
      Day: "MON",
      Room: "",
      Sec: "",
      Subject_id: "",
      Subject_name: "",
      Subject_unit: "",
      Teacher: "",
      Term: "",
      Time: "(01-13)"
    },
    {
      Day: "TUE",
      Room: "",
      Sec: "",
      Subject_id: "",
      Subject_name: "",
      Subject_unit: "",
      Teacher: "",
      Term: "",
      Time: "(01-13)"
    },
    {
      Day: "WED",
      Room: "",
      Sec: "",
      Subject_id: "",
      Subject_name: "",
      Subject_unit: "",
      Teacher: "",
      Term: "",
      Time: "(01-13)"
    },
    {
      Day: "THU",
      Room: "",
      Sec: "",
      Subject_id: "",
      Subject_name: "",
      Subject_unit: "",
      Teacher: "",
      Term: "",
      Time: "(01-13)"
    },
    {
      Day: "FRI",
      Room: "",
      Sec: "",
      Subject_id: "",
      Subject_name: "",
      Subject_unit: "",
      Teacher: "",
      Term: "",
      Time: "(01-13)"
    },
    {
      Day: "SAT",
      Room: "",
      Sec: "",
      Subject_id: "",
      Subject_name: "",
      Subject_unit: "",
      Teacher: "",
      Term: "",
      Time: "(01-13)"
    },
  ];

  // public SelectS_id_Sec = new FormGroup({
  //   selectSJ_id : new FormControl(''),
  //   delectSec :new FormControl('')
  // })

   

  public UpdatetableFG = new FormGroup({
    update_Subject_id: new FormControl(''),
    update_Subject_name: new FormControl(''),
    update_Subject_unit: new FormControl(''),
    update_Teacher: new FormControl(''),
    update_Day: new FormControl(''),
    update_Time: new FormControl(''),
    update_Sec: new FormControl(''),
    update_Room: new FormControl(''),
    update_Term: new FormControl('')
  })

  public addtableFG = new FormGroup({
    Subject_id: new FormControl(''),
    Subject_name: new FormControl(''),
    Subject_unit: new FormControl(''),
    Teacher: new FormControl(''),
    Day: new FormControl(''),
    Time: new FormControl(''),
    Sec: new FormControl(''),
    Room: new FormControl(''),
    Term: new FormControl('')
  })






  

  public term = new FormControl('');
  public sec = new FormControl('');
  showtable;
  Subject_id;
  Sec;
  updateSubject_id;
  updateSubject_name;
  updateSubject_unit;
  updateTeacher;
  updateDay;
  updateTime;
  updateSec;
  updateRoom;
  updateterm;

  constructor(
    private service: LoginserviceService,
    private modalService: NgbModal,
    private papa: Papa,
  ) { }

  ngOnInit() {
    this.service.getsidplaytable().subscribe(
      (res) => {
        // console.log(res);
        this.listtable = res;
      }
    )
    this.service.getterm().subscribe(
      (res) => {
        // console.log(res);
        this.listterm = res;

      }
    )
    this.service.getstdgroup().subscribe(
      (res) => {
        // console.log(res);
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
        // console.log(this.fileData.data);
      },
    };
    this.papa.parse(this.data, options);
  }
  onAddFile() {
    if (!this.fileData || this.fileData.data.length <= 0) {
      alert('กรุณาเลือกไฟล์เพื่ออัพโหลด')
    }
    else {
      // console.log(this.fileData.data)
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
    // console.log(this.term, this.sec);

    this.service.gettableall(this.term.value, this.sec.value).subscribe(
      (res) => {
        // console.log(res);
        let data = res;
        this.showtable = data;
        this.service.updateDisplay(this.emptyData).subscribe(
          (res) => {
            this.service.getsidplaytable().subscribe(
              (res) => {
                // console.log(res);
                this.listtable = res;
                this.service.updateDisplay(data).subscribe(
                  (res) => {
                    this.service.getsidplaytable().subscribe(
                      (res) => {
                        this.listtable = res;
                      }
                    )
                  }
                )
              }
            )
          }

        )
      }
    )
  }

  updatetableFN(list, modal) {
    this.updateSubject_id = list.Subject_id;
    this.updateSubject_name = list.Subject_name;
    this.updateSubject_unit = list.Subject_unit;
    this.updateTeacher = list.Teacher;
    this.updateDay = list.Day;
    this.updateTime = list.Time;
    this.updateSec = list.Sec;
    this.updateRoom = list.Room;
    this.updateterm = list.Term;
    this.modalService.open(modal, { centered: true })
    
    
    // console.log(list);

  }

  edit() {
    console.log(this.UpdatetableFG.value);
    this.service.update_table(this.UpdatetableFG.value).subscribe(
      (res) => {
        alert('แก้ใขสำเร็จ')
        this.gettable();
        this.closeModal();

      }
    )

  }




  deletetableFN(Subject_id, Sec, modal) {
    this.Subject_id = Subject_id;
    this.Sec = Sec;
    this.modalService.open(modal, { centered: true })
    console.log(Subject_id, Sec);


  }

  deletetableConfirm() {
    this.service.deletetable(this.Subject_id, this.Sec).subscribe(
      (res) => {
        alert('ลบสำเร็จ')
        this.gettable();
        this.closeModal();
        //   this.service.getsidplaytable().subscribe(
        //     (res) => {
        //       // console.log(res);
        //       this.listtable = res;
        //   }
        // )

      }

    )
  }

  add_tableFN(){
    console.log(this.addtableFG.value);
    
    this.service.add_table(this.addtableFG.value).subscribe(
      (res) =>{
        alert('เพิ่มข้อมูลสำเร็จ')
        this.gettable();
        this.closeModal();
      }
    )
  }



}
