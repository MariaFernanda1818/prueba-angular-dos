import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../core/constants/api';
import { UsersResponse } from '../models/UsersResponse';
import { UserCreateResponse } from '../models/UserCreateResponse';
import { UserCreate } from '../models/UserCreate';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  consultarUsuarios():Observable<UsersResponse>{
    return this.httpClient.post<UsersResponse>(`${API.BASE_ENDPOINT}${API.USERS}`)
  }

  createUsuario(usuarioCreate:UserCreate):Observable<UserCreateResponse>{
    return this.httpClient.get<UserCreateResponse>(`${API.BASE_ENDPOINT}${API.CREATE_USER}`, usuarioCreate)
  }

}
