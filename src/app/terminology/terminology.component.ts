import { Component, Input, OnInit } from '@angular/core';
import { Terminology } from '../shared/terminology';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'a.app-terminology',
  templateUrl: './terminology.component.html',
  styleUrls: ['./terminology.component.css'],
})
export class TerminologyComponent implements OnInit {
  @Input() terminology: Terminology | undefined;
  constructor() {}

  ngOnInit(): void {}
}
