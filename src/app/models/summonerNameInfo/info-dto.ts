import {ParticipantDto} from './participant-dto';

export class InfoDto {
  game_datetime: number;
  game_lenght: number;
  game_variaton: string;
  game_version: string;
  participants: ParticipantDto[];
  queue_id: number;
  tft_set_number: string;
}
