import {Component, OnInit} from '@angular/core';
import {Player} from './player';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {PlayerService} from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public players: Player[];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    //this.getPlayers();
  }

  public getPlayers(): void{
    this.playerService.getPlayers().subscribe(
      (response: Player[]) => {
        this.players = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(player: Player, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit'){
      button.setAttribute('data-target', '#updatePlayerModel');
    }
    if (mode === 'delete'){
      button.setAttribute('data-target', '#deletePlayerModel');
    }
    container.appendChild(button);
    button.click();


  }

}
