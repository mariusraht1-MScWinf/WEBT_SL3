import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Terminology, chapter } from '../shared/terminology';
import { TerminologyService } from '../shared/terminology.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-terminology-add',
  templateUrl: './terminology-add.component.html',
  styleUrls: ['./terminology-add.component.css'],
})
export class TerminologyAddComponent implements OnInit {
  @Input() terminology: Terminology | undefined;
  terminologies: Terminology[] = [];
  fieldsEmpty: Boolean = false;
  eChapter = chapter;

  constructor(
    private terminologyService: TerminologyService,
    private location: Location,
    private router: Router,
    private title: Title,
    private route: ActivatedRoute
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
