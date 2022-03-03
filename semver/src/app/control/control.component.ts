import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {

  @Output() majorIncremented = new EventEmitter();
  @Output() minorIncremented = new EventEmitter();
  @Output() patchIncremented = new EventEmitter();

  constructor() { }
}
