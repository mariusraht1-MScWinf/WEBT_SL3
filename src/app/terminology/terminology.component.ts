import { Component, Input, OnInit } from '@angular/core';
import { Terminology } from '../shared/terminology';

@Component({
  selector: 'a.app-terminology',
  templateUrl: './terminology.component.html',
  styleUrls: ['./terminology.component.css'],
})
export class TerminologyComponent implements OnInit {
  @Input() lecture: Terminology | undefined;
  constructor() {}

  ngOnInit(): void {}
}
