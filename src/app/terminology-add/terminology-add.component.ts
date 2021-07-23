import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Terminology } from '../shared/terminology';
import { TerminologyService } from '../shared/terminology.service';


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
  private title: Title
) {}

ngOnInit() {

}

sichern(
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
          } as Terminology)
  
}

}




    




