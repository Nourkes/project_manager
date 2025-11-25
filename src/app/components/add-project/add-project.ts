import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-project.html',
  styleUrls: ['./add-project.css'],
})
export class AddProjectComponent {
  project = {
    name: '',
    manager: '',
    dateDeb: '',
    dateFin: '',
    status: ''
  };

  onSubmit(f: any) {
    console.log(f.value);
    alert(`Le projet « ${this.project.name} » a été créé avec succès !`);
    f.resetForm();
  }

  onReset(f: any) {
    f.resetForm();
  }
}
