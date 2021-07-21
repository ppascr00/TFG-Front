import { Component, OnInit } from '@angular/core';
import {SummonerNameInfoService} from '../service/summoner-name-info.service';
import {Router} from '@angular/router';
import {MatchDto} from '../models/summonerNameInfo/match-dto';

@Component({
  selector: 'app-summoner-name-info',
  templateUrl: './summoner-name-info.component.html',
  styleUrls: ['./summoner-name-info.component.css']
})
export class SummonerNameInfoComponent implements OnInit {

  matches: MatchDto[];
  platform: string;
  summonerName: string;

  constructor(
    private summonerNameInfoService: SummonerNameInfoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSearch(): void{
    this.summonerNameInfoService.getSummonerNameInfo(this.platform, this.summonerName).subscribe(
      data => {
        this.matches = data;
      }
    );
    this.router.navigate(['/summoner/matches']);
  }
}
