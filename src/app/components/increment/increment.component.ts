import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent {

  // @Input('value') progress: number = 50;
  @Input() progress: number = 50;

  // get getPercent(){
  //   return `${ this.progress}%`
  // }

  changeValue(value:number){

    if ( this.progress + value > 100){
      return
    }
    if ( this.progress + value < 0){
      return
    }
    this.progress = this.progress + value;
  }

}
