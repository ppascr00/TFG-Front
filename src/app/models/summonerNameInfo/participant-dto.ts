import {CompanionDto} from './companion-dto';
import {TraitDto} from './trait-dto';
import {UnitDto} from './unit-dto';

export class ParticipantDto {
  companion: CompanionDto;
  gold_left: number;
  last_round: number;
  level: number;
  placement: number;
  players_eliminated: number;
  puuid: string;
  time_eliminated: number;
  total_damage_to_players: number;
  traits: TraitDto[];
  units: UnitDto[];
}
