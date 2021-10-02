import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Terminology, Terminologies } from './terminology';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TerminologyService {
  //addTerminology: any;
  constructor(private http: HttpClient) {}
  private terminologyUrl = 'api/terminologies';

  // private data store to save current Terminologies
  //private terminologyData = TERMINOLOGIES;
  // private Observer to push changes with .next()
  private terminologyObs = new Subject<Terminology[]>();

  // external observer for components to subscribe
  currentTerminology = this.terminologyObs.asObservable();
  changeTerminology() {
    this.terminologyObs.next();
  }

  // return Observable to compontents that want to subscribe
  getTerminologies(): Observable<Terminology[]> {
    return this.http
      .get<Terminology[]>(this.terminologyUrl)
      .pipe(
        tap((results) => {
          results.sort(function (A, B) {
            return A.chapter < B.chapter
              ? -1
              : A.chapter > B.chapter
              ? 1
              : A.title < B.title
              ? -1
              : 1;
          });
        })
      )
      .pipe(catchError(this.handleError('getTerminologies', [])));
  }

  getTerminology(id: number): Observable<Terminology> {
    //const url = "${this.terminologyUrl}/${id}";
    const url = this.terminologyUrl + '/' + id;
    return this.http
      .get<Terminology>(url)
      .pipe(
        catchError(this.handleError<Terminology>('getTerminology id=${id}'))
      );
  }

  updateTerminology(terminology: Terminology): Observable<Terminology> {
    return this.http
      .put<Terminology>(this.terminologyUrl, terminology, httpOptions)
      .pipe(catchError(this.handleError<Terminology>('updateTerminology')));
  }

  addTerminology(terminology: Terminology): Observable<Terminology> {
    return this.http
      .post<Terminology>(this.terminologyUrl, terminology, httpOptions)
      .pipe(catchError(this.handleError<Terminology>('addTerminology')));
  }

  /* private sortTerminologies() {
    console.log(this.terminologyData)
    this.terminologyData.sort(function (A,B){
      return (A.chapter < B.chapter) ? -1 : (A.chapter> B.chapter) ? 1 :0;
    })
    console.log(this.terminologyData)
  } */

  // push entry to private data store and send state to subscribers
  /*addEntry(term: Terminology) {
    this.terminologyData.push(term);
    this.sortTerminologies();
    this.terminologyObs.next(this.terminologyData);
  } */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(operation + 'failed: ' + error);
      return of(result as T);
    };
  }
  deleteTerminology(
    terminology: Terminology | number
  ): Observable<Terminology> {
    const id = typeof terminology === 'number' ? terminology : terminology.id;
    //const url = '${this.terminologyUrl}/${id}';
    const url = this.terminologyUrl + '/' + id;
    return this.http
      .delete<Terminology>(url, httpOptions)
      .pipe(catchError(this.handleError<Terminology>('deleteTerminology')));
  }
}

// TBD: other functions like edit and delete
