import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(): Observable<Game[]>{
    return this.http.get<Game[]>(`${env.BASE_URL}/games/`, {})
  }

  getGameDetails(id: string): Observable<any> {
    return this.http.get(`${env.BASE_URL}/games/${id}${env.KEY}`);
  }

  addGame(id: string){
    return this.http.post(`${env.BASE_URL}/mygames/${env.KEY}`, id);
  }
}
