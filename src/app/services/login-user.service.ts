import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ crearInter } from '../modelos/login.interface'

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  url:string = 'http://127.0.0.1:8000/api/login/'

  constructor(private http: HttpClient) { }

  getUsuarios(usuario:string, password:string): Observable<any>
  {
    return this.http.get('http://127.0.0.1:8000/api/login/');
  }


}

