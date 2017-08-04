import { Injectable } from '@angular/core';

@Injectable()
export class SpeedywordsApiService {

  constructor() { }

  public getList(id: number) {
    return {
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
    }
  }

}
