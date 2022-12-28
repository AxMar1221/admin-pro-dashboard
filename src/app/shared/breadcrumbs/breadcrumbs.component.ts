import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title!: string;
  public titleSusb$: Subscription;

  constructor( private router: Router, private route: ActivatedRoute ) {
    this.titleSusb$ = this.getNamePages()
                    .subscribe( ({ title}) => {
                      this.title = title;
                      document.title = `AdminPro - ${title}`;
                    });
  }

  ngOnDestroy(): void {
    this.titleSusb$.unsubscribe();
  }

  getNamePages(){
    return this.router.events
    .pipe(
      filter( (event): event is ActivationEnd => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data ),
    )
  }

}
