import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { interval, Observable, Subject, combineLatest } from "rxjs";
import { tap, takeWhile, takeUntil, switchMap, map } from "rxjs/operators";
import { LOADING_STENCIL_ROUTES_URLS } from "./loading-stencil/loading-stencil.constants";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

enum TimerResult {
  COMPLETE,
  ABORTED,
  SKIPPED
}

const TRANSLATIONS_FR = require('../assets/i18n/fr.json');

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
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
    console.log('########### in AppComponent, TRANSLATIONS_FR = \n' + JSON.stringify(TRANSLATIONS_FR));
    this.navRoutes = LOADING_STENCIL_ROUTES_URLS;
  }

  navToPage(page) {
    console.log('AppComponent, navToPage, page = ' + page);
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
