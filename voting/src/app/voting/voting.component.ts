import { Component, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent {

  @Input() question?: string;
  @Input() voters?: Person[];
  agreed = 0;
  disagreed = 0;

  constructor() { }

  handleVote(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}
