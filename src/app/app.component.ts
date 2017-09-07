import { Component, OnInit } from '@angular/core';
import { SpeedywordsApiService } from './speedywords-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpeedywordsApiService]
})
export class AppComponent {
  list: string;
  error: string;
  lists: string[];

  constructor(private swApiService: SpeedywordsApiService) {
    
  }


  ngOnInit() {
    this.swApiService.getLists()
    .then((result: any) => {
      this.lists = result.reduce((names, obj) => { 
        return names.concat(obj.name);
      }, []);
      this.list = this.lists[0];
    })
    .catch((err: any) => {
      this.error = err.message || err;
    });
    
  }

  SetList(list: string) {
    this.list = list;
  }
}
