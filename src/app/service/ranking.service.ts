import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LeagueItemDto} from '../models/ranking/league-item-dto';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  rankingUrl = environment.apiBaseUrl + '/ranking/';

  constructor(private httpClient: HttpClient) { }

  public getLeaderboardList( platformRegion: string ): Observable<LeagueItemDto[]>{
    return this.httpClient.post<LeagueItemDto[]>(this.rankingUrl + 'leaderboard', {}, { params: new HttpParams().set('platform', platformRegion)});
  }
}
