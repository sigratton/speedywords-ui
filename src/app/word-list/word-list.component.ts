import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SpeedywordsApiService } from '../speedywords-api.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.1.html',
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

  @Input() list: string;

  constructor(private swApiService: SpeedywordsApiService) {
    this.ListPosition = -1;
    this.random = false;
    this.atEnd = false;
    this.Playing(false);   
  }

  ngOnChanges() {
    if(!this.list)
      return;
      
    this.swApiService.getList(this.list)
    .then((result: any) => {
      this.wordList = result.words;
      this.listName = result.name;
      this.Stop();
      this.Beginning();
    })
    .catch((err: any) => {
      this.listName = "Error";
      this.error = err.message || err;
    });
  }

  ngOnInit() {
    this.speed = 2;
  }

  private KillTimer() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  Next() {
    if(this.random) {
      var current = this.ListPosition;
      this.ListPosition = Math.floor(Math.random() * this.wordList.length - 1);
      while(this.ListPosition === current) {
        this.ListPosition = Math.floor(Math.random() * this.wordList.length - 1);
      }
      
    }
    else {
      this.ListPosition++;
    }

    if(this.ListPosition < this.wordList.length) {
      this.word = this.wordList[this.ListPosition].value;
    }
    if(this.ListPosition === this.wordList.length - 1) {
      this.Playing(false);
      this.atEnd = true;
      this.KillTimer();
    }
  }

  Back(){
    this.ListPosition--;
    if(this.ListPosition >= 0) {
      this.word = this.wordList[this.ListPosition].value;
    }
    else {
      this.word = this.listName;
    }
    // can't be at the end if we have just gone back
    this.atEnd = false;
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
      this.randomColour = "#99ff66";
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
      this.playColour = "#99ff66";
      this.stopColour = "#ff6666";
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
