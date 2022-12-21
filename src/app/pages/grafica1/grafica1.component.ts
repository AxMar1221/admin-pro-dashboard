import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels: string[] = [ 'Compras', 'In-Compras', 'Mail-Compras' ];
  public data = [
    [ 50, 40, 100 ],
    ]
}
