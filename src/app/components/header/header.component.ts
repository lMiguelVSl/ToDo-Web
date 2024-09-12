import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderFacade } from './facade/header.facade';
import { map } from 'rxjs';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, RouterModule, TruncatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authToken: string = 'Not Authenticated';
  constructor(private headerFacade: HeaderFacade) { }

  GetToken() {
    this.headerFacade.GetToken('username').pipe(map(x => {
      return x.toString();
    })).subscribe({
      next: (token) => {
        this.authToken = token.toString();
      },
      error: (error) => {
        console.error('Error getting user token: ',error);
      }
    });
  }
}
