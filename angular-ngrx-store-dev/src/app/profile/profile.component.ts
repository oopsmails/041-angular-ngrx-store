import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './models/profile.model';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profiles$: Observable<Profile[]>;
  profileService: ProfileService;
  store: any;

  constructor() {
    // this.profiles$ = this.profileService.getProfiles();
    this.getData();
  }

  ngOnInit(): void {
  }

  getData() {
    this.store = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Test' },
    ];
  }
  trackByFn(index, item) {
    return index;
  }
  getNewData() {
    this.store = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Test' },
      { id: 4, name: 'Sam' },
      { id: 5, name: 'Kelly' },
      { id: 6, name: 'Thor' },
    ];
  }

}
