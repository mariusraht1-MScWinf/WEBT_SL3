import { Component, OnInit, Input } from '@angular/core';
import { Terminology, Chapter } from '../shared/terminology';
import { TerminologyService } from '../shared/terminology.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminology-add',
  templateUrl: './terminology-add.component.html',
  styleUrls: ['./terminology-add.component.css'],
})
export class TerminologyAddComponent implements OnInit {
  @Input() terminology: Terminology | undefined;
  terminologies: Terminology[] = [];
  fieldsEmpty: Boolean = false;
  eChapter = Chapter;

  constructor(
    private terminologyService: TerminologyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getTerminologies(): void {
    this.terminologyService
      .getTerminologies()
      .subscribe((terminologies) => (this.terminologies = terminologies));
  }

  save(title: string, desc: string, chapter: string, creator: string): void {
    if (!title || !desc || !chapter || !creator) {
      this.fieldsEmpty = true;
      return;
    }

    this.terminologyService
      .addTerminology({
        title,
        desc,
        chapter,
        creator,
      } as Terminology)
      .subscribe((terminology) => {
        this.terminologies.push(terminology);
        this.router.navigate(['/dashboard']);
      });
  }
}
