import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShapeComponent } from './Shapes/shape/shape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EoS-Fourth-Encounter';

  test(e: string): void {
    console.log(e)
  }
}
