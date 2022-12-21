import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit{
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass}`;
  }

  // @Input('value') progress: number = 50;
  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn btn-primary';

  @Output() outValue: EventEmitter<number> = new EventEmitter();

  // get getPercent(){
  //   return `${ this.progress}%`
  // }

  changeValue(value:number){

    if ( this.progress + value > 100){
      this.outValue.emit(100);
      return
    }
    if ( this.progress + value < 0){
      this.outValue.emit(0);
      return
    }
    this.progress = this.progress + value;
    this.outValue.emit( this.progress );
  }

  onChange( newValue: number){
    if( newValue >= 100 ){
      this.progress = 100;
    } else if( newValue <= 0){
      this.progress = 0
    } else {
      this.progress = newValue;
    }
    this.outValue.emit( this.progress );
  }

}
