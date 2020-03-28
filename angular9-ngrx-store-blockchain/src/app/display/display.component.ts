import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Blockchain } from '../models/blockchain.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  coins: Observable<Blockchain[]>;

  constructor(private store: Store<AppState>) {
    this.coins = this.store.select(state => state.blockchain);
  }

  ngOnInit() {
  }

}
