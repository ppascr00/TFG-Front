import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatchDto} from '../models/summonerNameInfo/match-dto';

@Injectable({
  providedIn: 'root'
})
export class SummonerNameInfoService {

  summonerNameInfoUrl = 'http://localhost:8080/summoner/';

  constructor( private httpClient: HttpClient ) { }

  public getSummonerNameInfo( platform: string, summonerName: string ): Observable<MatchDto[]>{
    const params = new HttpParams()
      .set('platform', platform)
      .set('summonerName', summonerName);
    return this.httpClient.post<MatchDto[]>(this.summonerNameInfoUrl + 'matches', {}, { params });
  }


}
