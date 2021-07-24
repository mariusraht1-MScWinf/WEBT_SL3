import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Terminology } from '../shared/terminology';
import { TerminologyService } from '../shared/terminology.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-terminology-add',
  templateUrl: './terminology-add.component.html',
  styleUrls: ['./terminology-add.component.css']
})
export class TerminologyAddComponent implements OnInit {
terminologies: Terminology [] = [];
fieldsEmpty: Boolean = false;

constructor(
  private terminologyService: TerminologyService,
  private location:Location,
  private title: Title
) {}

ngOnInit() {
  this.getTerminologies();

}

getTerminologies():void {
  this.terminologyService.getTerminologies()
  .subscribe(terminologies => this.terminologies = terminologies);
}

goBack():void {
  this.location.back();
}

save(
  title: string,
  desc: string,
  chapter: string,
  creator: string
  ): void {

    if (!title|| !desc || !chapter|| !creator) {
      this.fieldsEmpty = true;
      return;
    }

    this.terminologyService
    .addTerminology({
      title,
      desc,
      chapter,
      creator,
          } as Terminology).subscribe(terminology => {this.terminologies.push(terminology); this.goBack()})

        }



}









