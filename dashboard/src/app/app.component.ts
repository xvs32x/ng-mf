import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DataAccessUserComponent } from '@ng-mf/data-access-user';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, DataAccessUserComponent],
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'dashboard';
}
