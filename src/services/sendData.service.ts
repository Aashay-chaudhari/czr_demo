import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class sendDataService {
  token = 'Enter token'
  constructor(private http: HttpClient) { }
  public sendInfo(params:any){

        let apiUrl = ''
        const headers = new HttpHeaders({
          'X-Api-Key': this.token
        });
       apiUrl = 'Enter API gateway endpoint';

    return this.http.post(apiUrl,params,{ headers: headers });
  }
}
