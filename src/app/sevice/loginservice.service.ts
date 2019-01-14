import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlServer } from '../url/url'


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  updateroom(): any {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }
  loginAdmin(data) {
    return this.http.post(urlServer.ipServer + 'loginadmin', data)
  }
  getListName(data) {
    return this.http.get(urlServer.ipServer + 'listname/' + data)
  }
  getroom(){
    return this.http.get(urlServer.ipServer + 'listroom/')
  }
  deletedeletestudent(data) {
    return this.http.delete(urlServer.ipServer + 'deletestudent/' + data)
  }
  deleteroom(data){
    return this.http.delete(urlServer.ipServer + 'deleteroom/' + data)
  }
  addstudent(data) {
    return this.http.post(urlServer.ipServer + 'addstudent', data)
  }
  addroom(data){
    return this.http.post(urlServer.ipServer + 'addroom', data)
  }
  getGroups() {
    return this.http.get(urlServer.ipServer + 'selectgroup')
  }
  updateStudent(data) {
    return this.http.put(urlServer.ipServer + 'updatestudent', data)
  }
  updateRoom(data){
    return this.http.put(urlServer.ipServer + 'updateroom' ,data)
  }
  uploadstudent(data) {
    return this.http.post(urlServer.ipServer + 'uploadstudent', data)
  }

}
