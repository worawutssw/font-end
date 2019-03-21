import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginserviceService } from 'src/app/sevice/loginservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { timer } from 'rxjs';
import { take, count } from 'rxjs/operators';

@Component({
  selector: 'app-managehardware',
  templateUrl: './managehardware.component.html',
  styleUrls: ['./managehardware.component.css']
})
export class ManagehardwareComponent implements OnInit {


  public AddHardware = new FormGroup({
    hardwareid: new FormControl,
    hardwarename: new FormControl,
    roomid: new FormControl 
  })

  public UpdateHardware = new FormGroup({
    updateHardwareid: new FormControl,
    updatehardwarename: new FormControl,
    updateroomid: new FormControl

  })




  listhardware;
  listhardware1;
  hardwareid;
  updateHardwarename;
  hardwarename;
  updateHardwareid;
  x;
  statusHW;
  updateRoomid;
  listRoom;
  
  constructor(
    private service: LoginserviceService,
    private modal: NgbModal
  ) { }

  ngOnInit() {

    this.service.getlistroom().subscribe(
      (res) => {
        this.listRoom = res;
        console.log(res);
        
      }
    )
    




    timer(1000, 5000).pipe(
      take(100000)).subscribe(x => {
        this.service.gethardware().subscribe(
          (res) => {
            this.listhardware = res;
            return this.listhardware;
          }
        )
        timer(1000, 5000).pipe(
          take(100000)).subscribe(x => {
            this.service.gethardware().subscribe(
              (res) => {
                this.listhardware1 = res;
                for (let i of this.listhardware) {
                  for (let j of this.listhardware1) {

                    if (i.hardwareid == j.hardwareid) {
                      if (i.hardwaretime != j.hardwaretime) {
                        console.log("Connected", i.hardwareid);
                        
                      }
                      if (i.hardwaretime == j.hardwaretime) {
                        console.log("Disconnect", i.hardwareid);
                        i.hardwarestatus = 0;
                        this.statusHW = i.hardwarestatus;
                      }
                    }
                    if (i.hardwareid != j.hardwareid) {
                    }
                  }
                }
              }
            )
          })
      })

  }
  openModal(addhardware) {

    this.modal.open(addhardware, { centered: true })
  }
  closeModal() {
    this.modal.dismissAll()
  }

  deleteHardware(hardwareid, modal) {
    this.hardwareid = hardwareid;
    this.hardwarename = hardwareid;
    this.modal.open(modal, { centered: true })

  }

  deletehardwareConfirm() {
    this.service.deletehardware(this.hardwareid).subscribe(
      (res) => {
        this.service.gethardware().subscribe(
          (res) => {
            this.listhardware = res
            this.closeModal();
          }
        )
      }

    )
  }


  updatehardware(list, modal) {
    this.modal.open(modal, { centered: true })
    this.updateHardwarename = list.hardwarename;
    this.updateHardwareid = list.hardwareid;
    this.updateRoomid = list.roomid;

  }
  Edit() {
    this.service.updatehardware(this.UpdateHardware.value).subscribe(
      (res) => {
        alert('แก้ใขสำเร็จ')
        this.closeModal();
        console.log(this.UpdateHardware.value);
        this.service.gethardware().subscribe(
          (res) => {
            this.listhardware = res
          }
        )

      }
    )



  }

  AddHardWareSubmit() {
    console.log(this.AddHardware.value);
    this.service.addhardware(this.AddHardware.value).subscribe(
      (res) => {
        alert('เพิ่มสำเร็จ')
        this.service.gethardware().subscribe(
          (res) => {
            this.listhardware = res
            this.closeModal();
          }

        )
      }
    )

    

  }

  // selectlistroom(){
  //   console.log(this.roomid.value)
  //   this.service.getlistroom(this.roomid.value).subscribe(
  //     (res) => {
  //       // alert('suc')
  //       this.listRoom = res;
  //     },
  //     (err) => {
  //       alert('err')
  //     }
  //   )
  // }

}
