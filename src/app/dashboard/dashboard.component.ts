import { Component, OnInit } from '@angular/core';
import { Terminology, TERMINOLOGIES } from '../shared/terminology';
import { TerminologyService } from '../shared/terminology.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  terminologies: Terminology[] = TERMINOLOGIES;
  selectedTerminology: Terminology | undefined;

  constructor(private ts: TerminologyService) {}

  onSelect(terminology: Terminology): void {
    this.selectedTerminology = terminology;
  }

  ngOnInit(): void {}
}
