import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  constructor(
    private httpclient: HttpClient
  ) { }

    getcountry(): Observable<any>
    {
      return this.httpclient.get("http://universities.hipolabs.com/search");
    }

    getuniversitybycountry(countryselect: string): Observable<any>
    {
      let params1 = new HttpParams().set('country', countryselect);
      return this.httpclient.get("http://universities.hipolabs.com/search", {params:params1});
    } 
}
