import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public games: Array<Game>;
  private routeSub: Subscription;
  private gameSub: Subscription;
  page: number = 1;
  page_size: number = 2;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  constructor(    
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.searchGames();
    });
  }

  searchGames(): void {
    this.gameSub = this.httpService
      .getGameList()
      .subscribe((gameList: Array<Game>) => {
        this.games = gameList;
        console.log(gameList);
      });
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  nextPage(){
    this.page += 1;

    console.log(this.games)
  }

  prevPage(){
    this.page -= 1;
  }

  gamesPerPage(page_size: number){
    this.page_size = page_size;
  }
}
