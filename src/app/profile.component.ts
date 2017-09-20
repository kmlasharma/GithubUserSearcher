import {Component} from '@angular/core';
import {GitSearchService} from './git.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user: any;
  repos: any[];
  username: string;


  constructor(private gitSearchService: GitSearchService) {
    
  }

  searchUser() {
    this.gitSearchService.searchUser(this.username)
    .subscribe(user => {
        this.user = user;
    })
  }
}
