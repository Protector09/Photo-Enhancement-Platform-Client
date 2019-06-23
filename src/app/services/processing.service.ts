import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SROneUrl, deBlurUrl } from 'src/assets/urls';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form',
      
    })
  };


@Injectable()
export class ProcessingService {

    constructor(private http: HttpClient) {
    }
    
    public super_resolution_one(username: string, image: any, new_heigth: string, new_width: string, factor: string): Observable<any>{

      let body = new FormData();
      body.append("username", username)
      body.append("image", image)
      body.append("new_heigth", new_heigth)
      body.append("new_width", new_width)
      body.append("factor", factor)

      return this.http.post(SROneUrl, body, {responseType: 'blob'});
    }

    public deblur(username: string, image: any,): Observable<any>{

      let body = new FormData();
      body.append("username", username)
      body.append("image", image)

      return this.http.post(deBlurUrl, body, {responseType: 'blob'});
    }
}