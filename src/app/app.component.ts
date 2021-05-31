import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userType = User;
  users: Partial<User>[] = [
    {
      firstName: 'سینا',
      lastName: 'آقاجانی',
      isAdmin: true
    },
    {
      firstName: 'پوریا',
      lastName: 'امن زاده',
      isAdmin: false
    }
  ]
}
