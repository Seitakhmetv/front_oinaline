import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="OinaLine";

  logged = false;
  username = '';
  password = '';

  constructor(private httpService: HttpService){}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token){
      this.logged = true
    }
  }

  login(){
    this.httpService.login(this.username, this.password).subscribe((data)=>{
      
      localStorage.setItem('token', data.token)

      this.logged=true;
      this.username = '';
      this.password = '';
    })
  }

  logout(){
    this.logged = false;
    localStorage.removeItem('token');
  }
}
