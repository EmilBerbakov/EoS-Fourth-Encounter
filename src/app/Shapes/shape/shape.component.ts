import { CommonModule, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ShapeOptions } from './shape.type';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'shape-component',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  template: `@if(size(); as size) {
                <button [matTooltip]="shape()" mat-button (click)="selection.emit(shape())" [style.height.px]="size" [style.width.px]="size" [style.border-radius]="0">
                 <svg [attr.width]="size" [attr.height]="size" xmlns="http://www.w3.org/2000/svg">
                  @switch (shape()) {
                    @case ("Square") {
                      <rect [attr.width]="size" [attr.height]="size" [attr.fill]="color()" />
                    }
                    @case ("Triangle") {
                      <polygon [attr.points]="trianglePoints()" [attr.fill]="color()" />
                    }
                    @case ("Circle") {
                      <circle [attr.r]="size/2" [attr.cx]="size/2" [attr.cy]="size/2"/>
                    }
                  }
                 </svg>
                </button>
  }
`,
  styleUrl: './shape.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapeComponent {
  size = input(100);
  color = input("black");
  shape = input<ShapeOptions>("Square");
  selection = output<ShapeOptions>();

  trianglePoints = computed(() => {
    if (this.shape() === "Triangle") {
      let sizeSignal = this.size()
      console.log(`${sizeSignal/2} ${sizeSignal * (Math.sqrt(3)/2)}, ${sizeSignal} ${sizeSignal}, 0 ${sizeSignal}`)
      return `${sizeSignal/2} ${sizeSignal - (sizeSignal * Math.sqrt(3))/2}, ${sizeSignal} ${sizeSignal}, 0 ${sizeSignal}`
    }
    else {
      return ''
    }
  })
 }
