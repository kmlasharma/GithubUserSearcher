import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitSearchService {
  private clientID = 'b38080fee21cc6e9b565';
  private clientSecret = '0312b597276413c504acde3b7901ac3f1ddd74c2';

  constructor(private http: Http) {
  }

  searchUser(username: string) {
    let url = `http://api.github.com/users/${username}?client_id=${this.clientID}&client_secret=${this.clientSecret}`;
    // let url = `http://api.github.com/users/${username}`;

    console.log(url);
    return this.http.get(url)
        .map(res => res.json());
  }
}
