import { Injectable } from '@angular/core';
import { Terminology, TERMINOLOGIES } from './terminology';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const terminologies: Terminology [] = [];//TERMINOLOGIES;
    return {terminologies};
  }
  genId(terminologies:Terminology[]): number {
    return terminologies.length >0 ? Math.max(...terminologies.map(terminology => terminology.id)) +1 : 11;
  }
  constructor() { }
}
