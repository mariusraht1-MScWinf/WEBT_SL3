import { Component, Input, OnInit } from '@angular/core';
import { Terminology } from '../shared/terminology';

@Component({
  selector: 'app-terminology-details',
  templateUrl: './terminology-details.component.html',
  styleUrls: ['./terminology-details.component.css']
})
export class TerminologyDetailsComponent implements OnInit {
  @Input() terminology: Terminology | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
