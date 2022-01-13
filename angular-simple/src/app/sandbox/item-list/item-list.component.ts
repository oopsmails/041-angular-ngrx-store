import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  collapsed = true;
  includeSandbox = true;
  faCoffee = faCoffee;
  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit() {
    console.log('in ItemListComponent');
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
