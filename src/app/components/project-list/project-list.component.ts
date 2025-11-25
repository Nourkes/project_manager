import { Component, Input } from '@angular/core'; 
import { DatePipe } from '@angular/common';
import { TaskList } from '../task-list/task-list';
import { ProjectDetailComponent } from '../project-detail/project-detail.component'; 
import { FormsModule } from '@angular/forms';    
import { DashboardComponent } from '../dashboard/dashboard';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css'],
    standalone: true,                
  imports: [DatePipe, FormsModule, TaskList, ProjectDetailComponent,DashboardComponent], 
})
export class ProjectListComponent {
  title: string = 'Project Manager';
 @Input() nameProj!: string;
 searchTerm = ''; 
  projects = [
    {
      name: 'Projet 1',
      description: 'Description 1',
      dateDeb: new Date('2023-05-10'),
      dateFin: new Date('2025-10-17'),
      status: 'En cours',
      tasks: [
        { title: 'Tâche 1', priority: 'Haute',   status: 'En attente' },
        { title: 'Tâche 2', priority: 'Moyenne', status: 'En cours' }
      ]
    },
    {
      name: 'Projet 2',
      description: 'Description 2',
      dateDeb: new Date('2024-01-15'),
      dateFin: new Date('2026-02-10'),
      status: 'Terminé',
      tasks: [
        { title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }
      ]
    }
  ];
    selectedProject: any | null = null;   

  selectProject(p: any) {               
    this.selectedProject = p;
  }
}
