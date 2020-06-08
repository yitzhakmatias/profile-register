import {Component, Input, OnInit} from '@angular/core';
import {candidate} from '../../model/candidate';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.css']
})
export class CandidateCardComponent {

  @Input()
  candidate: candidate;

  constructor() {
  }

}
