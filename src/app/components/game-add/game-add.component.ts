import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss']
})
export class GameAddComponent implements OnInit {

  selectedGame: Game
  games: Array<Game>

  constructor(private httpService: HttpService) { }

 
  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.httpService.getGameList().subscribe((data) => {
      this.games = data
    })
  }

  chooseGame(id: string){
    this.httpService.addGame(id);
    alert("Added to Favorites!!!")
  }
  
}
