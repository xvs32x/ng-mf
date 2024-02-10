import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-mf-data-access-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-access-user.component.html',
  styleUrl: './data-access-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataAccessUserComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
