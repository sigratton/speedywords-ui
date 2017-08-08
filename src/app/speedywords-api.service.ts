import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpeedywordsApiService {

  constructor(private http: Http) { }

  public getList(name: string): Promise<any> {
    return this.http.get(encodeURI('http://speedwordsapi.azurewebsites.net/list?name=' + name))
    .toPromise()
    .then((response) => {
      return response.json() as Object;
    })
    .catch((err: any) => {
      return Promise.reject(err.message || err);
    });
  }

  public getLists(): Promise<any> {
    return this.http.get(encodeURI('http://speedwordsapi.azurewebsites.net/list'))
    .toPromise()
    .then((response) => {
      return response.json() as Object;
    })
    .catch((err: any) => {
      return Promise.reject(err.message || err);
    });
  }
}
