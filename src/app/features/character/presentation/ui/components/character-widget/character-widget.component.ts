import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-widget',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './character-widget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
