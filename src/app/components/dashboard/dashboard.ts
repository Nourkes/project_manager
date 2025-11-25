import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent {
  @Input() projects: Array<{ tasks: Array<{ status: string }> }> = [];

  get totalProjects(): number {
    return this.projects.length;
  }

  get totalTasks(): number {
    return this.projects.reduce((acc, p) => acc + (p.tasks?.length || 0), 0);
  }

  get globalProgressPct(): number {
    const total = this.totalTasks;
    if (!total) return 0;
    const done = this.projects.reduce(
      (acc, p) => acc + (p.tasks?.filter(t => t.status === 'Terminé').length || 0),
      0
    );
    return Math.round((done / total) * 100);
  }
}
