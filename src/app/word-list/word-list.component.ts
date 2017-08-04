import { Component, OnInit } from '@angular/core';
import { SpeedywordsApiService } from '../speedywords-api.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  word: string;
  private wordList: any;
  private listName: string;
  private ListPosition: number;
  private READY: string = "Ready";
  private speed: number;
  private timer: any;
  constructor() {
    this.word = this.READY;
    this.ListPosition = 0;
  }

  ngOnInit() {
    var wordService = new SpeedywordsApiService();
    var result = wordService.getList(1);
    this.wordList = result.words;
    this.listName = result.name;
    this.word = this.listName;
    this.speed = 5;
  }

  Next() {
    if(this.ListPosition < this.wordList.length) {
      this.word = this.wordList[this.ListPosition].value;
      this.ListPosition++;
    }
  }

  Player() {
    if(this.ListPosition >= this.wordList.length) {
      clearInterval(this.timer);
      return;
    }
    this.Next();
  }

  Beginning() {
    this.ListPosition = 0;
    this.word = this.listName;
  }

  Stop() {
    clearInterval(this.timer);
  }

  Play() {
    this.Next();
    this.timer = setInterval(() => {
      this.Player();
    }, this.speed*1000);
  }

}
