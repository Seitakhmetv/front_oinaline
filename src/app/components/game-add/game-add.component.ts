import { Component, OnInit } from '@angular/core';
import { Game, Genre, Platforms, Publishers, Screenshots, Types } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss']
})
export class GameAddComponent implements OnInit {

  games: Array<Game>
  platforms: Array<Platforms>
  publishers: Array<Publishers>
  genres: Array<Genre>
  types: Array<Types>
  trailer: string

  type_title = ""
  type_id: number
  
  description: string
  metacritic: number

  constructor(private httpService: HttpService) { }

 
  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.httpService.getGameList().subscribe((data) => {
      this.games = data
    })
  }

  getPlatforms(){
    this.httpService.getPlatforms().subscribe((data)=>{
      this.platforms = data;
    })
  }

  getPublishers(){
    this.httpService.getPublisher().subscribe((data)=>{
      this.publishers = data;
    })
  }

  getTypes(){
    this.httpService.getTypes().subscribe((data)=>{
      this.platforms = data;
    })
  }

  getGenres(){
    this.httpService.getGenres().subscribe((data)=>{
      this.genres = data;
    })
  }

  OnSubmit(){
    this.httpService.addType(this.type_title).subscribe((data)=>{
      console.log(data)
    })
    alert("Added")
  }

  
}
