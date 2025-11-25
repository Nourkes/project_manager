import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

export interface Task {
  title: string;
  priority: string;
  status: string;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})

export class TaskList {
  @Input() tasks: Task[] = [];
  @Output() statusChange = new EventEmitter<{ index: number }>();

onClickChange(index: number) {
  this.statusChange.emit({ index });
}

}
