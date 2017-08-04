import { Component, OnInit } from '@angular/core';
import { SpeedywordsApiService } from '../speedywords-api.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css'],
  providers: [SpeedywordsApiService]
})
export class WordListComponent implements OnInit {
  word: string;
  private wordList: any;
  private listName: string;
  private ListPosition: number;
  private speed: number;
  private timer: any;
  private error: string;
  private random: boolean;
  private playing: boolean;
  private playColour: string;
  private stopColour: string;
  private randomColour: string;
  private atEnd: boolean;

  constructor(private swApiService: SpeedywordsApiService) {
    this.ListPosition = -1;
    this.random = false;
    this.atEnd = false;
    this.Playing(false);   
  }

  ngOnInit() {
//    var wordService = new SpeedywordsApiService();
    this.swApiService.getList('List 1')
    .then((result: any) => {
      this.wordList = result.words;
      this.listName = result.name;
      this.word = this.listName;
    })
    .catch((err: any) => {
      this.listName = "Error";
      this.error = err.message || err;
    });

    this.speed = 2;
  }

  private KillTimer() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  Next() {
    if(this.random) {
      this.ListPosition = Math.floor(Math.random() * this.wordList.length);
    }
    else {
      this.ListPosition++;
    }

    if(this.ListPosition < this.wordList.length) {
      this.word = this.wordList[this.ListPosition].value;
    }
    else {
      this.Playing(false);
      this.atEnd = true;
      this.KillTimer();
    }
  }

  Player() {
    if(this.ListPosition > this.wordList.length) {
      this.KillTimer();
      return;
    }
    this.Next();
  }

  Beginning() {
    this.ListPosition = -1;
    this.word = this.listName;
    this.atEnd = false;
  }

  Random() {
    this.random = !this.random;
    if(this.random) {
      this.randomColour = "green";
    }
    else {
      this.randomColour = "";
    }
  }

  Faster() {
    if(this.speed > 0.5) {
      this.speed = this.speed - 0.5
      if(this.playing) { 
        this.Stop();
        this.Play();
      }
    }
  }

  private Playing(playing: boolean) {
    this.playing = playing;
    if(playing) {
      this.playColour = "green";
      this.stopColour = "red";
    } 
    else {
      this.playColour = "";
      this.stopColour = "";
    }
  }

  Slower() {
    this.speed = this.speed + 0.5
    if(this.playing) {
      this.Stop();
      this.Play();
    }
  }

  Stop() {
    this.KillTimer();
    this.Playing(false);
  }

  Play() {
    if(this.timer === undefined) {
      this.Playing(true);
      this.SetInterval();
    }
  }

  private SetInterval(){
    this.timer = setInterval(() => {
      this.Player();
    }, this.speed*1000);
  }

}
