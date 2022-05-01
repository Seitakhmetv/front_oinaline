import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string;
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
      if (params['game-search']) {
        this.searchGames('metacrit', this.page, this.page_size, params['game-search']);
      } else {
        this.searchGames('metacrit', this.page, this.page_size);
      }
    });
  }

  searchGames(sort: string, page: number, page_size: number, search?: string): void {
    this.gameSub = this.httpService
      .getGameList(sort, page, page_size, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
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
    this.searchGames(this.sort, this.page, this.page_size);
  }

  prevPage(){
    this.page -= 1;
    this.searchGames(this.sort, this.page, this.page_size);
  }

  gamesPerPage(page_size: number){
    this.page_size = page_size;
  }
}
