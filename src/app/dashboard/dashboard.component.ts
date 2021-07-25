import { Component, OnInit } from '@angular/core';
import { Terminology, TERMINOLOGIES } from '../shared/terminology';
import { TerminologyService } from '../shared/terminology.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  terminologies: Terminology[] = []; // TERMINOLOGIES;
  selectedTerminology: Terminology | undefined;

  constructor(private ts: TerminologyService) {
    ts.currentTerminology.subscribe(() => this.getTerminologies());
  }

  onSelect(terminology: Terminology): void {
    this.selectedTerminology = terminology;
  }

  ngOnInit() {
    this.getTerminologies();
  }
  getTerminologies(): void {
    this.ts
      .getTerminologies()
      .subscribe((terminologies) => (this.terminologies = terminologies));
  }
  delete(terminology: Terminology): void {
    this.terminologies = this.terminologies.filter((l) => l !== terminology);
    this.ts.deleteTerminology(terminology).subscribe();
  }
}
