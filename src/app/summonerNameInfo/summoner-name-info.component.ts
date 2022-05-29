import { Component, OnInit } from '@angular/core';
import {SummonerNameInfoService} from '../service/summoner-name-info.service';
import {Router} from '@angular/router';
import {MatchDto} from '../models/summonerNameInfo/match-dto';
import {UsernameInfoMatch} from '../models/summonerNameInfo/UsernameInfoMatch';


interface Platform{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-summoner-name-info',
  templateUrl: './summoner-name-info.component.html',
  styleUrls: ['./summoner-name-info.component.css']
})
export class SummonerNameInfoComponent implements OnInit {

  summonerInfoMatches: UsernameInfoMatch[];
  position: number;
  typeMatch: string;
  gameDatetime: number;
  gameLenght: number;

  platform: string;
  summonerName: string;
  busqueda: boolean;

  platforms: Platform[] = [
    {value: 'EUW1', viewValue: 'EUW'},
    {value: 'BR1', viewValue: 'BR'},
    {value: 'EUN1', viewValue: 'EUNE'},
    {value: 'JP1', viewValue: 'JP'},
    {value: 'KR', viewValue: 'KR'},
    {value: 'LA1', viewValue: 'LAN'},
    {value: 'LA2', viewValue: 'LAS'},
    {value: 'NA1', viewValue: 'NA'},
    {value: 'OC1', viewValue: 'OCE'},
    {value: 'RU', viewValue: 'RU'},
    {value: 'TR1', viewValue: 'TR'},
  ];

  constructor(
    private summonerNameInfoService: SummonerNameInfoService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.platform = 'EUW1';
    this.busqueda = false;
  }

  onSearch(): void{
    this.summonerNameInfoService.getSummonerNameInfo(this.platform, this.summonerName).subscribe(
      data => {
        this.summonerInfoMatches = data;
      }
    );
    this.router.navigate(['/summoner/matches'], { queryParams: { platform: this.platform, summonerName: this.summonerName }});
    this.busqueda = true;
  }

}
