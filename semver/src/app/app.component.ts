import { Component } from '@angular/core';
import { ChangelogEntry } from './changelog-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  major = 0;
  minor = 0;
  patch = 1;

  changes: ChangelogEntry[] = [
    { type: 'patch', oldValue: 0, newValue: 1 }
  ];

  incrementMajor(): void {
    this.major++;
    this.minor = 0;
    this.patch = 0;
    this.changes.push({
      type: 'major',
      oldValue: this.major - 1,
      newValue: this.major
    });
  }

  incrementMinor(): void {
    this.minor++;
    this.patch = 0;
    this.changes.push({
      type: 'minor',
      oldValue: this.minor - 1,
      newValue: this.minor
    });
  }

  incrementPatch(): void {
    this.patch++;
    this.changes.push({
      type: 'patch',
      oldValue: this.patch - 1,
      newValue: this.patch
    });
  }

}
