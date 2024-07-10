import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ShapeComponent } from '../shape/shape.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shape-form',
  standalone: true,
  imports: [
    CommonModule,
    ShapeComponent,
    ReactiveFormsModule
  ],
  template: `<p>shape-form works!</p>`,
  styleUrl: './shape-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapeFormComponent {


fb = inject(FormBuilder);
formGroup: FormGroup = this.fb.group({

})


}
