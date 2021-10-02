import { TerminologyService } from './../shared/terminology.service';
import { Terminology, Chapter } from './../shared/terminology';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'div.terminology',
  templateUrl: './terminology.component.html',
  styleUrls: ['./terminology.component.css'],
})
export class TerminologyComponent implements OnInit {
  @Input() terminology: Terminology | undefined;
  terminologies: Terminology[] = [];

  constructor(private terminologyService: TerminologyService) {}

  ngOnInit() {}

  getTerminologies(): void {
    this.terminologyService
      .getTerminologies()
      .subscribe((terminologies) => (this.terminologies = terminologies));
  }

  chapterColor(chapter: Chapter): string {
    switch (chapter) {
      case Chapter.Web:
        return '#fffde7';
      case Chapter.HTML:
        return '#ff5722';
      case Chapter.CSS:
        return '#9c27b0';
      case Chapter.Client_Side_Scripting_1:
        return '#e1f5fe';
      case Chapter.Client_Side_Scripting_2:
        return '#e8f5e9';
      case Chapter.SPA_Frameworks:
        return '#fafafa';
      case Chapter.PHP:
        return '#f9fbe7';
      case Chapter.Server_Side_Frameworks:
        return '#81c784';
      case Chapter.CMS_LMS:
        return '#90caf9';
      default:
        return '#fff59d';
    }
  }

  delete(terminology: Terminology): void {
    this.terminologies = this.terminologies.filter((t) => t !== terminology);
    this.terminologyService
      .deleteTerminology(terminology)
      .subscribe(() => this.terminologyService.changeTerminology());
  }
}
