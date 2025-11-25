import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,              // <-- important
  imports: [NgClass],
  templateUrl: './status-badge.html',
  styleUrls: ['./status-badge.css'] 
})
export class StatusBadgeComponent {
  @Input() status: string = '';
}
