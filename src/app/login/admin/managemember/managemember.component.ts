import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModel, FormGroup, FormControl } from '@angular/forms';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';
import { TooltipPosition } from '@angular/material';

@Component({
  selector: 'app-managemember',
  templateUrl: './managemember.component.html',
  styleUrls: ['./managemember.component.css']
})
export class ManagememberComponent implements OnInit {
  // checked = false;
  // indeterminate = false;
  // labelPosition = 'after';
  // disabled = false;


  // positionOptions: TooltipPosition[] = ['Admin', 'Teacher'];
  // position = new FormControl(this.positionOptions[0]);

  

  public membergroup = new FormGroup({
    adminid : new FormControl(''),
    adminpw : new FormControl(''),
    FName : new FormControl(''),
    LName : new FormControl(''),
    Status : new FormControl('')
  })

  public updatememberGroup = new FormGroup({
    update_adminid : new FormControl(''),
    update_adminpw : new FormControl(''),
    update_Fname : new FormControl(''),
    update_LName : new FormControl(''),
    update_Status : new FormControl('')
      
  })



  adminid;
  listmember;
  updateadminid;
  updateadminpw;
  updateFname;
  updateLName;
  updateStatus;

  
  constructor(
    private Service :LoginserviceService,
    private modal: NgbModal,
    
    

  ) { }

  ngOnInit() {
    this.Service.getmember().subscribe(
      (res) =>{
        this.listmember = res;
      }
      
    )
  }

  openModal(addmember) {
    this.modal.open(addmember, { centered: true })
  }

  closeModal() {
    this.modal.dismissAll()
  }

  addmemberfn(){
    console.log(this.membergroup.value)
    this.Service.Addmember(this.membergroup.value).subscribe(
      (res)=>{
        alert('เพิ่มสำเร็จ')
        this.closeModal()
        this.Service.getmember().subscribe(
        (res) =>{
          this.listmember = res
        }
        )
      }

    )
    
    
  }

  deleteMember(adminid,modal){
    this.adminid = adminid;
    this.modal.open(modal ,{centered:true})
  }

  deletememberConfirm(){
    // console.log(this.adminid);
    
    this.Service.deletememberService(this.adminid).subscribe(
      (res) => {
        alert('ลบสำเร็จ')
        this.closeModal();
        this.Service.getmember().subscribe(
          (res) =>{
            this.listmember = res
          }
        )
      }
    )

  }



  updateMember(list,modal){
    this.updateadminid = list.adminid;
    this.updateadminpw = list.adminpw;
    this.updateFname = list.FName;
    this.updateLName = list.LName;
    this.updateStatus = list.Status;
    this.modal.open(modal ,{centered:true})


  }

  edit(){
    this.Service.updatemember(this.updatememberGroup.value).subscribe(
      (res) => {
        alert('แก้ใขสำเร็จ')
        this.closeModal();
        console.log(this.updatememberGroup);
        this.Service.getmember().subscribe(
          (res) => {
            this.listmember = res
          }
        )
        
      }

      
    )
  }







}
