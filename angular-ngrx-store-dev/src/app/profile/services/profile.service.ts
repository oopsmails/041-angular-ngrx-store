import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Profile } from "../models/profile.model";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private profilesUrl = "http://localhost:3000/profiles";

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profilesUrl);
  }

  getProfileById(payload: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.profilesUrl}/${payload}`);
  }

  createProfile(payload: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.profilesUrl, payload);
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.patch<Profile>(
      `${this.profilesUrl}/${profile.id}`,
      profile
    );
  }

  deleteProfile(payload: number) {
    return this.http.delete(`${this.profilesUrl}/${payload}`);
  }
}
