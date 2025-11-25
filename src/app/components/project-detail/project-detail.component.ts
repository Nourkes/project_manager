import { Component, Input } from '@angular/core';
import { DatePipe, DecimalPipe, NgClass } from '@angular/common';
import { TaskList } from '../task-list/task-list';
import { StatusBadgeComponent } from '../status-badge/status-badge'; // ⬅️ sans ".component"

@Component({
  selector: 'app-project-detail',
  standalone: true,
  templateUrl: './project-detail.html',
imports: [DatePipe, DecimalPipe, NgClass, TaskList, StatusBadgeComponent],
})

export class ProjectDetailComponent {
@Input() project!: any;

onTaskStatusChange(e: { index: number }) {
  const s = this.project.tasks[e.index].status;
  this.project.tasks[e.index].status =
    s === 'En attente' ? 'En cours' :
    s === 'En cours'    ? 'Terminé'  : 'En attente';
}
getProgress(): number {
  if (!this.project?.tasks?.length) return 0;
  const done = this.project.tasks.filter((t :any )=> t.status === 'Terminé').length;
  return (done / this.project.tasks.length) * 100;
}

}
