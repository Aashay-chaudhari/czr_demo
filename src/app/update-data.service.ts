import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {
  token = 'VdSqsVk7JBgPJgbckjLD8WuI2TqT99e3QRkOxNg6'
  constructor(private http: HttpClient) { }
  public updateData(data: any){

        let apiUrl = ''
        const headers = new HttpHeaders({
          'X-Api-Key': this.token
        });
       apiUrl = 'https://5fm7cr8leb.execute-api.us-east-1.amazonaws.com/dev';

    return this.http.post(apiUrl,data,{ headers: headers });
  }
}
