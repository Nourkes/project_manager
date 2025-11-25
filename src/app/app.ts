import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { AddProjectComponent } from './components/add-project/add-project';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectListComponent,AddProjectComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
    template: `<app-add-project></app-add-project>`,

})
export class App {
    nameProj = 'Project 1';

}
