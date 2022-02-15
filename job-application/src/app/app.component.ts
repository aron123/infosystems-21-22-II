import { Component } from '@angular/core';
import { Applicant, applicants } from './applicants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  company = 'Example Company Ltd.';
  description = 'Világvezető szoftverfejlesztő példacég, milliárdos éves forgalommal.';
  applicants = applicants;
  isFormVisible = false;

  id = 11;
  name = '';
  age = 0;
  role = '';
  education: 'középiskola' | 'BSc' | 'MSc' | 'PhD' = 'BSc';
  desiredSalary = 100000;

  showForm() {
    this.isFormVisible = true;
  }

  isOutlier(applicant: Applicant) {
    return applicant.education === 'középiskola' && applicant.desiredSalary > 600000
      || applicant.education === 'PhD' && applicant.desiredSalary < 600000;
  }

  addApplicant() {
    this.applicants.push({
      id: this.applicants.length + 1,
      name: this.name,
      age: this.age,
      role: this.role,
      education: this.education,
      desiredSalary: this.desiredSalary
    });
    this.isFormVisible = false;
  }

  deleteApplicant(applicant: Applicant) {
    const index = this.applicants.indexOf(applicant);
    if (index > -1) {
      this.applicants.splice(index, 1);
    }
  }
}
