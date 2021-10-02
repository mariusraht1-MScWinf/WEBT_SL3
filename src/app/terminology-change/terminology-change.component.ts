import { Component, OnInit, Input } from '@angular/core';
import { Terminology, Chapter } from '../shared/terminology';
import { TerminologyService } from '../shared/terminology.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-terminology-change',
  templateUrl: './terminology-change.component.html',
  styleUrls: ['./terminology-change.component.css'],
})
export class TerminologyChangeComponent implements OnInit {
  @Input() terminology: Terminology | undefined;
  fieldsEmpty: Boolean = false;
  chapter = Chapter;

  constructor(
    private terminologyService: TerminologyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTerminology();
  }

  getTerminology(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.terminologyService
        .getTerminology(parseInt(id))
        .subscribe((terminology) => (this.terminology = terminology));
    }

    if (!this.terminology) {
      this.terminology = {
        id: 0,
        title: '',
        chapter: Chapter.CMS_LMS,
        creator: '',
        desc: '',
      } as Terminology;
    }
  }

  save(): void {
    if (!this.terminology) return;
    const id = this.route.snapshot.paramMap.get('id');

    if (
      !this.terminology.title ||
      !this.terminology.desc ||
      !this.terminology.chapter ||
      !this.terminology.creator
    ) {
      this.fieldsEmpty = true;
      return;
    }

    if (id) {
      this.terminologyService
        .updateTerminology(this.terminology as Terminology)
        .subscribe(() => this.router.navigate(['/dashboard']));
    } else {
      this.terminologyService
        .addTerminology(this.terminology as Terminology)
        .subscribe(() => this.router.navigate(['/dashboard']));
    }
  }
}
