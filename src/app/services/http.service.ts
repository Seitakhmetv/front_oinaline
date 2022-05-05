import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { AuthToken, Game, Platforms, Publishers, Genre, Types, Screenshots } from '../models';

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

  getPlatforms(): Observable<Platforms[]>{
    return this.http.get<Platforms[]>(`${env.BASE_URL}/platforms/`, {})
  }

  getPublisher(): Observable<Publishers[]>{
    return this.http.get<Platforms[]>(`${env.BASE_URL}/publishers/`, {})
  }

  getGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>(`${env.BASE_URL}/genres/`, {})
  }

  getTypes(): Observable<Types[]>{
    return this.http.get<Platforms[]>(`${env.BASE_URL}/publishers/`, {})
  }

  getScreenshots(): Observable<Screenshots[]>{
    return this.http.get<Screenshots[]>(`${env.BASE_URL}/screenshots/`, {})
  }

  addType(title: string): Observable<Types>{
    return this.http.post<Types>(`${env.BASE_URL}/types/`, {
      id: 1,
      title
    });
  }

  login(username:string, password:string): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${env.BASE_URL}/login/`, {
      username, 
      password
    });
  }
}
