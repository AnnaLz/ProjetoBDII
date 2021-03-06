import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class GeralService {

  constructor( private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(`${baseUrl}/general/all-columns`);
  }

  getQuery(query: any): Observable<any>{
    return this.http.post(`${baseUrl}/general/montar-query`, query);
  } 

  getWordCloud(qtd: any): Observable<any>{
    return this.http.post(`${baseUrl}/general/word-cloud`, qtd);
  }  
 
}
