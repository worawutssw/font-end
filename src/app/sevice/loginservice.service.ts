import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlServer } from '../url/url'


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }
  loginAdmin(data) {
    return this.http.post(urlServer.ipServer + 'loginadmin', data)
  }
  getListName(data) {
    return this.http.get(urlServer.ipServer + 'listname/' + data)
  }
  deletedeletestudent(data) {
    return this.http.delete(urlServer.ipServer + 'deletestudent/' + data)
  }
  addstudent(data) {
    return this.http.post(urlServer.ipServer + 'addstudent', data)
  }
  getGroups() {
    return this.http.get(urlServer.ipServer + 'selectgroup')
  }
  updateStudent(data) {
    return this.http.put(urlServer.ipServer + 'updatestudent', data)
  }
  uploadstudent(data) {
    return this.http.post(urlServer.ipServer + 'uploadstudent', data)
  }

}
