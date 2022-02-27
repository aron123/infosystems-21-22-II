import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent {

  @Input() voter!: Person;
  didVote: boolean = false;
  @Output() onVote = new EventEmitter<boolean>();

  constructor() { }

  agreed() {
    this.onVote.emit(true);
    this.didVote = true;
  }

  disagreed() {
    this.onVote.emit(false);
    this.didVote = true;
  }
}
