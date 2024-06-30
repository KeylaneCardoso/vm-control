import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './info-dashboard.component.html',
  styleUrl: './info-dashboard.component.scss'
})
export class InfoDashboardComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() text: string = '';

}
