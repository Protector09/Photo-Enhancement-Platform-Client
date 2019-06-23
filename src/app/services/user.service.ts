import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { loginUrl, registerUrl } from 'src/assets/urls';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


@Injectable()
export class UserService {

    body = []

    constructor(private http: HttpClient) {
    }
  
    public login(user: any) {
        localStorage.setItem('user', JSON.stringify({username: user.username, password: user.password}));
    }

    public getUser(): any {
        return JSON.parse(localStorage.getItem('user'));
      }
}