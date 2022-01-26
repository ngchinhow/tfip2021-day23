import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

type Task = {
  description?: string,
  priority?: string,
  dueDate?: string
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Array<Task> = new Array<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(form: FormGroup) {
    this.tasks.push({
      description: form.get('description')?.value,
      priority: form.get('priority')?.value,
      dueDate: form.get('dueDate')?.value
    });
  }
}
