import { Component, OnInit } from '@angular/core';
import { TerminologyService } from '../shared/terminology.service';
import { Terminology } from '../shared/terminology';


@Component({
  selector: 'app-terminology-add',
  templateUrl: './terminology-add.component.html',
  styleUrls: ['./terminology-add.component.css']
})
export class TerminologyAddComponent implements OnInit {
terminologies: Terminology [] = [];
  

constructor(
  
) {}

ngOnInit() {

}


}


    




