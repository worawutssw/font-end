import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-managerooom',
  templateUrl: './managerooom.component.html',
  styleUrls: ['./managerooom.component.css']
})
export class ManagerooomComponent implements OnInit {

  public AddRoom = new FormGroup({
    roomid :new FormControl(''),
    roomname :new FormControl('')
  })

  public UpdateRoom = new FormGroup({
    update_roomid: new FormControl(''),
    update_roomname : new FormControl('')


  })





  listroom;
  roomid;
  updateRoomid;
  updateRoomname;
  constructor(
    private Service:LoginserviceService,
    private modal: NgbModal
  ) { }
  


  ngOnInit() {
    this.Service.getroom().subscribe(
      (res) =>{
        this.listroom = res;
      }
    )
  }


  openModal(addroom) {

    this.modal.open(addroom, { centered: true })
  }
  closeModal() {
    this.modal.dismissAll()
  }

  deleteRoom(roomid,modal){
    this.roomid = roomid;
    this.modal.open(modal ,{centered:true})
  }

  deleteRoomConfirm(){
    this.Service.deleteroom(this.roomid).subscribe(
      (res) => {
        alert('ลบสำเร็จ')
        this.closeModal();
        this.Service.getroom().subscribe(
          (res) =>{
            this.listroom = res
          }
        )
      }
    )

  }

  edit(){
    console.log(this.UpdateRoom.value);
    this.Service.updateRoom(this.UpdateRoom.value).subscribe(
      (res) => {
        alert('แก้ใขสำเร็จ')
        this.closeModal();
        
        this.Service.getroom().subscribe(
          (res) => {
            this.listroom = res
          }
        )
        
      }

      
    )
  }
  updateRoom(list,modal){
    // this.updateStudent_id = list.student_id;
    this.updateRoomid = list.roomid;
    this.updateRoomname = list.roomname;
    this.modal.open(modal ,{centered:true})

  }


  addRoom(){
    console.log(this.AddRoom.value)
    this.Service.addroom(this.AddRoom.value).subscribe(
      (res)=>{
        alert('เพิ่มสำเร็จ')
        this.closeModal()
        this.Service.getroom().subscribe(
        (res) =>{
          this.listroom = res
        }
        )
      }

    )
    
    
  }






}



