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
  gethardware(){
    return this.http.get(urlServer.ipServer + 'listhardware/')
  }
  getsidplaytable(){
    return this.http.get(urlServer.ipServer + 'selectdisplaytable')  
  }
  getterm(){
    return this.http.get(urlServer.ipServer + 'selectterm')
  }
  deletedeletestudent(data) {
    return this.http.delete(urlServer.ipServer + 'deletestudent/' + data)
  }
  deleteroom(data){
    return this.http.delete(urlServer.ipServer + 'deleteroom/' + data)
  }
  deletehardware(data){
    return this.http.delete(urlServer.ipServer + 'deletehardware/' + data)
  }
  deletememberService(data){
    return this.http.delete(urlServer.ipServer + 'deletemember/' + data)
  }
  addstudent(data) {
    return this.http.post(urlServer.ipServer + 'addstudent', data)
  }
  addhardware(data){
    return this.http.post(urlServer.ipServer + 'addhardware', data)
  }
  addroom(data){
    return this.http.post(urlServer.ipServer + 'addroom', data)
  }
  Addmember(data){
    return this.http.post(urlServer.ipServer + 'addmember' , data)
  }
  getGroups() {
    return this.http.get(urlServer.ipServer + 'selectgroup')
  }
  getstdgroup(){
    return this.http.get(urlServer.ipServer + 'selectstdgroup')
  }
  gettableall(data1,data2){
    return this.http.get(urlServer.ipServer + 'selecttableall'+'/'+data1+'/'+data2)
  }
  gethisdate(data1,data2){
    return this.http.get(urlServer.ipServer + 'gethisdatewm'+'/'+data1+'/'+data2)
  }
  gethistory(){
    return this.http.get(urlServer.ipServer + 'gethistory/')
  }
  gethistorydate(data){
    return this.http.get(urlServer.ipServer+'gethistorydate/'+data)
  }
  getusingchair(){
    return this.http.get(urlServer.ipServer + 'getusingchair')
  }
  getmember(){
    return this.http.get(urlServer.ipServer + 'getmember')
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
  updatehardware(data){
    return this.http.put(urlServer.ipServer + 'updatehardware', data)
  }
  updateconhw(data){
    return this.http.put(urlServer.ipServer + 'conhw', data)
  }
  uploadtable(data){
    return this.http.post(urlServer.ipServer + 'uploadtable', data)
  }
  updateDisplay(data){
    return this.http.put(urlServer.ipServer + 'updateDisplay', data)
  }
  updatemember(data){
    return this.http.put(urlServer.ipServer + 'updatemember', data)
  }

}
