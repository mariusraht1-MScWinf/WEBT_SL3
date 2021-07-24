import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Terminology, chapter } from '../shared/terminology';
import { TerminologyService } from '../shared/terminology.service';
import {Location} from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-terminology-edit',
  templateUrl: './terminology-edit.component.html',
  styleUrls: ['./terminology-edit.component.css']
})
export class TerminologyEditComponent implements OnInit {
  @Input() terminology: Terminology | undefined;
fieldsEmpty: Boolean = false;
eChapter = chapter;

constructor(
  private terminologyService: TerminologyService,
  private location:Location,
  private router: Router,
  private title: Title,
  private route: ActivatedRoute,
) {}

ngOnInit():void {
  this.getTerminology();
}

getTerminology(): void {
  const id = this.route.snapshot.paramMap.get('id');
  // check if id is null
  if (id !== null) {
    this.terminologyService
      .getTerminology(parseInt(id))
      .subscribe(terminology => (this.terminology = terminology));
  }
}

save(): void {
    if (this.terminology) {
    if (!this.terminology.title|| !this.terminology.desc || !this.terminology.chapter|| !this.terminology.creator) {
      this.fieldsEmpty = true;
      return;
    }
      this.terminologyService.updateTerminology(this.terminology as Terminology).subscribe(()=> this.router.navigate(['/dashboard']));
    }

  }
}








