import { Component, OnInit } from '@angular/core';
import {RankingService} from '../service/ranking.service';
import {LeagueItemDto} from '../models/ranking/league-item-dto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  leagueItemDTO: LeagueItemDto[];
  platform: string;

  constructor(
    private rankingService: RankingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.platform = 'euw1';
  }


  onLeaderboard(platform: string): void{
    this.rankingService.getLeaderboardList(platform).subscribe(
      data =>
        this.leagueItemDTO = data
    );

    this.router.navigate(['/ranking'], { queryParams: { platform }});
  }
}
