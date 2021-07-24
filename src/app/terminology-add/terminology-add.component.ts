import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Terminology, chapter, ChapterAsArray } from '../shared/terminology';
import { TerminologyService } from '../shared/terminology.service';
import {Location} from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-terminology-add',
  templateUrl: './terminology-add.component.html',
  styleUrls: ['./terminology-add.component.css']
})
export class TerminologyAddComponent implements OnInit {
  @Input() terminology: Terminology | undefined;
terminologies: Terminology [] = [];
fieldsEmpty: Boolean = false;
eChapter = chapter;
isNew: Boolean = false;
chaptersAsArray = ChapterAsArray;

constructor(
  private terminologyService: TerminologyService,
  private location:Location,
  private router: Router,
  private title: Title,
  private route: ActivatedRoute,
) {}

ngOnInit():void {
  //this.getTerminologies();
  this.isNew = this.route.snapshot.paramMap.get('id') === null;
  this.getTerminology();
}

getTerminologies():void {
  this.terminologyService.getTerminologies()
  .subscribe(terminologies => this.terminologies = terminologies);
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

save(
  title: string,
  desc: string,
  chapter: string,
  creator: string
  ): void {
  console.log(chapter)
    if (!title|| !desc || !chapter|| !creator) {
      this.fieldsEmpty = true;
      return;
    }
    if (this.isNew) {
    chapter = chapter.split(": " )[1]
    this.terminologyService
    .addTerminology({
      title,
      desc,
      chapter,
      creator,
          } as Terminology).subscribe(terminology => {this.terminologies.push(terminology); this.router.navigate(['/dashboard'])  })

        }

      else { this.terminologyService.updateTerminology(this.terminology as Terminology).subscribe(()=> this.router.navigate(['/dashboard']));


      }


}
}








