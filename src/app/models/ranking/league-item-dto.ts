import {MiniSeriesDto} from './mini-series-dto';

export class LeagueItemDto {
  freshBlood: boolean;
  wins: number;
  summonerName: string;
  miniSeries: MiniSeriesDto;
  inactive: boolean;
  veteran: boolean;
  hotStreak: boolean;
  rank: string;
  leaguePoints: number;
  losses: number;
  summonerId: string;
}
