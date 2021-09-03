import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-select-examples',
  templateUrl: './select-examples.component.html',
  styleUrls: ['./select-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
