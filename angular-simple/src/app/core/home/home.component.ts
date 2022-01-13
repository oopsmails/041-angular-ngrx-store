import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { interval, Observable, Subject, combineLatest } from "rxjs";
import { tap, takeWhile, takeUntil, switchMap, map } from "rxjs/operators";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { LOADING_STENCIL_ROUTES_URLS } from "src/app/loading-stencil/loading-stencil.constants";

enum TimerResult {
  COMPLETE,
  ABORTED,
  SKIPPED
}

const TRANSLATIONS_FR = require('src/assets/i18n/fr.json');

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = "Angular";
  title = 'angular-simple';
  result;
  simpleTimer$ = interval(100);
  _notifier: Subject<TimerResult> = new Subject();
  notifier$: Observable<TimerResult> = this._notifier.asObservable();

  navRoutes: any = null;

  faCoffee = faCoffee;

  constructor(
    private router: Router
  ) {}
  
  ngOnInit() {
    console.log('########### in HomeComponent, TRANSLATIONS_FR = \n' + JSON.stringify(TRANSLATIONS_FR));
    this.navRoutes = LOADING_STENCIL_ROUTES_URLS;
  }

  navToPage(page) {
    console.log('HomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  startTimer(): Observable<any> {
    const timer$ = this.simpleTimer$.pipe(
      tap((res) => this.result = res),
      takeUntil(this.notifier$)
    );
    return combineLatest(timer$, this.notifier$)
  }

  end() {
    this._notifier.next(TimerResult.ABORTED)
  }

  start() {
    this.startTimer().subscribe(([timer, action]) => {
      this.result = "end:" + timer + " action:" + action
    })
  }

  valueEmittedFromChildComponent: string;
  
  parentEventHandlerFunction(valueEmitted) {
    this.valueEmittedFromChildComponent = valueEmitted;
  }

}
