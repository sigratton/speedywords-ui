import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpeedywordsApiService {

  constructor(private http: Http) { }

  public getList(name: string): Promise<any> {
    return this.http.get(encodeURI('http://localhost:8080/list?name=' + name))
    .toPromise()
    .then((response) => {
      return response.json() as Object;
    })
    .catch((err: any) => {
      return Promise.reject(err.message || err);
    });
    
    


    /*return {
        "_id": "5983f9422f78912fd429fe94",
        "name": "List 1",
        "__v": 0,
        "words": [
            {
                "value": "I",
                "_id": "5983f9422f78912fd429fe96"
            },
            {
                "value": "the",
                "_id": "5983f9422f78912fd429fe95"
            },
            {
                "value": "and",
                "_id": "5983f9422f78912fd429fe95"
            },
            {
                "value": "to",
                "_id": "5983f9422f78912fd429fe95"
            },
            {
                "value": "a",
                "_id": "5983f9422f78912fd429fe95"
            },
            {
                "value": "was",
                "_id": "5983f9422f78912fd429fe95"
            },
            {
                "value": "my",
                "_id": "5983f9422f78912fd429fe95"
            },
            {
                "value": "went",
                "_id": "5983f9422f78912fd429fe95"
            },
            {
                "value": "we",
                "_id": "5983f9422f78912fd429fe95"
            },
            {
                "value": "on",
                "_id": "5983f9422f78912fd429fe95"
            }
        ]
    }*/
  }

}
