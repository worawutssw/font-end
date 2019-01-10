import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { addSubtract } from 'ngx-bootstrap/chronos/moment/add-subtract';
import { AuthenticationService } from '../../../sevice/authentication.service.service';
import { Papa } from 'ngx-papaparse';



@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  @ViewChild('csvData') _file: ElementRef;
  private data: any;
  private fileData;

  public addStudent = new FormGroup({
    student_id :new FormControl(''),
    name:new FormControl(''),
    lastname:new FormControl(''),
    rfid:new FormControl(''),
    groups:new FormControl('')
  })

  public editstudent = new FormGroup({
    student_update_student_id :new FormControl(''),
    student_update_name:new FormControl(''),
    student_update_lastname:new FormControl(''),
    student_update_rfid:new FormControl(''),
    student_update_groups:new FormControl('')
  })

  public groups = new FormControl('');
  listName;
  
  constructor(
    private service:LoginserviceService,
    private modalService:NgbModal,
    private papa: Papa,
  ) { }
  student_id;
  listGroups;

//update variable
    updateStudent_id;
    updateName;
    updateLastname;
    updateRfid;
    updateGroups;
  ngOnInit() {
    this.service.getGroups().subscribe(
      (res) => {
        this.listGroups = res;
      }
    )
  }
  selectgroup(){
    console.log(this.groups.value)
    this.service.getListName(this.groups.value).subscribe(
      (res) => {
        // alert('suc')
        this.listName = res;
      },
      (err) => {
        alert('err')
      }
    )
  }
  openModal(template){
    this.modalService.open(template,{centered:true});
  }
  closeModal(){
    this.modalService.dismissAll()
  }

  addSTD(){
    console.log(this.addStudent.value)
    this.service.addstudent(this.addStudent.value).subscribe(
      (res) => {
        alert('เพิ่มสำเร็จ')
        this.closeModal();
        this.selectgroup();
      }
    ),
    (err) => {
      alert('ข้อมูลผิดพลาด')
    }
  }
  deleteSTD(student_id,modal){
    this.student_id = student_id;
    this.modalService.open(modal ,{centered:true})
  }
  updatestd(list,modal){
    this.updateStudent_id = list.student_id;
    this.updateName = list.name;
    this.updateLastname = list.lastname;
    this.updateRfid = list.rfid;
    this.updateGroups = list.groups;
    this.modalService.open(modal ,{centered:true})
  }
  edit(){
    this.service.updateStudent(this.editstudent.value).subscribe(
      (res) => {
        alert('แก้ไขสำเร็จ')
        this.closeModal();
        this.selectgroup();
      }
    )
  }



  deleteConfirm(){
    this.service.deletedeletestudent(this.student_id).subscribe(
      (res) => {
        console.log("กลุ่มมมมม",this.groups.value)
        alert('ลบสำเร็จ')
        this.closeModal();
        this.service.getListName(this.groups.value).subscribe(
          (res) => {
            this.listName = res
          }
        )
      }
    )
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
    else{
      console.log(this.fileData.data)
      const data = {
        data:this.fileData.data
      }
      this.service.uploadstudent(data).subscribe(
        (res) => {
          alert('อัพโหลดไฟล์สำเร็จ')
          this.service.getGroups().subscribe(
            (res) => {
              this.listGroups = res;
            }
          )
        }
      )
    }
  }


}


