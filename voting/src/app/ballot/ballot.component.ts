import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent {

  @Input() voter!: Person;
  @Output() voted = new EventEmitter<boolean>();

  constructor() { }

  onVote(agreed: boolean) {
    this.voter.voted = true;
    this.voted.emit(agreed);
  }
}
