import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Terminology, TERMINOLOGIES } from './terminology';

@Injectable({
  providedIn: 'root'
})
export class TerminologyService {
  addTerminology: any;
  constructor() {
    this.sortTerminologies();
  }
  // private data store to save current Terminologies
  private terminologyData = TERMINOLOGIES;
  // private Observer to push changes with .next()
  private terminologyObs = new Subject<Terminology[]>();

  // external observer for components to subscribe
  currentTerminology = this.terminologyObs.asObservable();

  // return Observable to compontents that want to subscribe
  getTerminologies(): Observable<Terminology[]> {
    return this.currentTerminology;
  }
  private sortTerminologies() {
    console.log(this.terminologyData)
    this.terminologyData.sort(function (A,B){
      return (A.chapter < B.chapter) ? -1 : (A.chapter> B.chapter) ? 1 :0;
    })
    console.log(this.terminologyData)
  }


  // push entry to private data store and send state to subscribers
  addEntry(term: Terminology) {
    this.terminologyData.push(term);
    this.sortTerminologies();
    this.terminologyObs.next(this.terminologyData);
  }

  }

  // TBD: other functions like edit and delete

