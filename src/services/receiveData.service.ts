import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class receiveDataService {
  token = 'Enter token'
  constructor(private http: HttpClient) { }
  public receiveInfo(data: any){

        let apiUrl = ''
        const headers = new HttpHeaders({
          'X-Api-Key': this.token
        });
       apiUrl = 'Enter API Gateway endpoint here';

    return this.http.post(apiUrl,data,{ headers: headers });
  }
}
