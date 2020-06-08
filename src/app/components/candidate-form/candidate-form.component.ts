import {Component, OnInit} from '@angular/core';
import {candidate} from '../../model/candidate';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent {

  candidateForm: candidate;

  constructor() {
    this.candidateForm = candidate.candidateInstance();
  }

  addCandidate(): void {
    console.log(JSON.stringify(this.candidateForm, null, 2));
  }

}
