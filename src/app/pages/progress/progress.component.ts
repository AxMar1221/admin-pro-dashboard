import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  progress1: number = 21;
  progress2: number = 12;

  get getprogress1(){
    return `${ this.progress1}%`;
  }

  get getprogress2(){
    return `${ this.progress2}%`;
  }

}
