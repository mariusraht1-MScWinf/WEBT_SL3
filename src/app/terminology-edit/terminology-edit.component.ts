import { Component, OnInit, Input } from '@angular/core';
import { Terminology, Chapter } from '../shared/terminology';
import { TerminologyService } from '../shared/terminology.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-terminology-edit',
  templateUrl: './terminology-edit.component.html',
  styleUrls: ['./terminology-edit.component.css'],
})
export class TerminologyEditComponent implements OnInit {
  @Input() terminology: Terminology | undefined;
  fieldsEmpty: Boolean = false;
  eChapter = Chapter;

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
    if (!id) return;
    this.terminologyService
      .getTerminology(parseInt(id))
      .subscribe((terminology) => (this.terminology = terminology));
  }

  save(): void {
    if (!this.terminology) return;
    if (
      !this.terminology.title ||
      !this.terminology.desc ||
      !this.terminology.chapter ||
      !this.terminology.creator
    ) {
      this.fieldsEmpty = true;
      return;
    }
    this.terminologyService
      .updateTerminology(this.terminology as Terminology)
      .subscribe(() => this.router.navigate(['/dashboard']));
  }
}
