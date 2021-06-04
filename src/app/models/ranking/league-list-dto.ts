import {LeagueItemDto} from './league-item-dto';

export class LeagueListDto {
  leagueId: string;
  entries: LeagueItemDto[];
  tier: string;
  name: string;
  queue: string;
}
