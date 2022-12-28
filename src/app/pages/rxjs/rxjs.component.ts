import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor(){

    // this.returnOservable().pipe(
    //   retry()
    // ).subscribe({
    //   next: value => console.log('Subs:', value),
    //   error: err => console.log('Err', err),
    //   complete: ( ) => console.log('Obs terminado')
    // });

    this.intervalSubs = this.returnInterval().subscribe( console.log )
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number>{
    return interval(500)
          .pipe(
            map( value => value +1 ),
            filter( value => ( value % 2 === 0 ) ? true : false ),
            // take(10)
          );
  }

  returnOservable(): Observable<number>{
    let i = -1;
    return new Observable<number>( observer => {
      const interval = setInterval( () => {
        i++;
        observer.next(i);

        if( i === 21 ){
          clearInterval( interval );
          observer.complete();
        }
        if ( i === 12 ){
          i=0;
          clearInterval( interval );
          observer.error('i llego a 12')
        }
      },1000)
    });
  }

}
