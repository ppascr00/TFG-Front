import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatchDto} from '../models/summonerNameInfo/match-dto';
import {environment} from '../../environments/environment';
import {UsernameInfoMatch} from '../models/summonerNameInfo/UsernameInfoMatch';

@Injectable({
  providedIn: 'root'
})
export class SummonerNameInfoService {

  summonerNameInfoUrl = environment.apiBaseUrl + '/summoner/';

  constructor( private httpClient: HttpClient ) { }

  public getSummonerNameInfo( platform: string, summonerName: string ): Observable<UsernameInfoMatch[]>{
    const params = new HttpParams()
      .set('platform', platform)
      .set('summonerName', summonerName);
    return this.httpClient.post<UsernameInfoMatch[]>(this.summonerNameInfoUrl + 'matches', {}, { params });
  }


}
