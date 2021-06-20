import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/team/'

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get(API_URL);
  }

  add(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

  getById(id: any): Observable<any> {
    return this.http.get(API_URL+id);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(API_URL+id);

  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(API_URL + id, data);
  }

}
