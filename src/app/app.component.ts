import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: string;

  ngOnInit() {
    this.list = 'List 1';
  }

  SetList(list: string) {
    this.list = list;
  }
}
