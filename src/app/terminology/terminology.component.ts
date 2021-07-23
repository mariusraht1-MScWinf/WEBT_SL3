import { Terminology, chapter } from './../shared/terminology';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'div.terminology',
  templateUrl: './terminology.component.html',
  styleUrls: ['./terminology.component.css'],
})
export class TerminologyComponent implements OnInit {
  @Input() terminology: Terminology | undefined;
  constructor() {}

  ngOnInit(): void {}


   chapterColor (chapterC: chapter): string {
    if (chapterC == chapter.Web) {
      return "#fffde7"
    }
    if (chapterC == chapter.HTML) {
      return "#ff5722"
    }
    if (chapterC == chapter.CSS) {
      return "#9c27b0"
    }
    if (chapterC == chapter.Client_Side_Scripting_1) {
      return "#e1f5fe"
    }
    if (chapterC == chapter.Client_Side_Scripting_2) {
      return "#e8f5e9"
    }
    if (chapterC == chapter.SPA_Frameworks) {
      return "#fafafa"
    }
    if (chapterC == chapter.PHP) {
      return "#f9fbe7"
    }
    if (chapterC == chapter.Server_Side_Frameworks){
      return "#81c784"
    }
    if (chapterC == chapter.CMS_LMS) {
      return "#90caf9"
    }
    else  {
      return "#fff59d"
    }


  }
}
