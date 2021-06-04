import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LeagueListDto} from '../models/ranking/league-list-dto';
import {LeagueItemDto} from '../models/ranking/league-item-dto';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  rankingUrl = 'http://localhost:8080/ranking/';

  constructor(private httpClient: HttpClient) { }

  public getLeaderboardList( platformRegion: string ): Observable<LeagueItemDto[]>{
    return this.httpClient.post<LeagueItemDto[]>(this.rankingUrl + 'leaderboard', {}, { params: new HttpParams().set('platform', platformRegion)});
  }
}
