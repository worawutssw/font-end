import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlServer } from '../url/url'

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  loginAdmin(data){
    return this.http.post(urlServer.ipServer + 'loginadmin',data)
  }

}
