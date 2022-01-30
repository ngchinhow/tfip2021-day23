import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Array<Task> = new Array<Task>();
  filledForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    let taskCheck = new RegExp(/^taskid:/);
    for (let i = 0; i < localStorage.length; i++) {
      let k = localStorage.key(i);
      if (k != null && taskCheck.test(k)) {
        let v = localStorage.getItem(k);
        if (v != null) {
          const taskJson = JSON.parse(v);
          this.tasks.push(
            new Task(
              taskJson['id'],
              taskJson['description'],
              taskJson['priority'],
              new Date(taskJson['dueDate']),
              taskJson['status']
            )
          );
        }
      }
    }
  }

  addTask(form: FormGroup) {
    var task: Task;
    if (form.contains('index')) {
      task = this.tasks[form.get('index')?.value];
      console.log(task);
      task.description = form.get('description')?.value;
      task.priority = form.get('priority')?.value;
      task.dueDate = form.get('dueDate')?.value;
    } else {
      task = new Task(
        null,
        form.get('description')?.value,
        form.get('priority')?.value,
        form.get('dueDate')?.value as Date,
        'pending'
      );
      this.tasks.push(task);
    }
    localStorage.setItem('taskid:' + task.id, JSON.stringify(task));
  }

  completeTask(index: number) {
    const task = this.tasks[index];
    task.status = 'completed';
    const v = localStorage.getItem('taskid:' + task.id);
    if (v != null) {
      const taskJson = JSON.parse(v);
      taskJson['status'] = 'completed';
      localStorage.setItem('taskid:' + task.id, JSON.stringify(taskJson));
    }
  }

  editTask(index: number) {
    const task = this.tasks[index];
    this.filledForm = new FormGroup({
      index: new FormControl(index),
      description: new FormControl(task.description),
      priority: new FormControl(task.priority),
      dueDate: new FormControl(task.dueDate)
    });
  }

  removeTask(index: number) {
    const task = this.tasks[index];
    this.tasks.splice(index, 1);
    localStorage.removeItem('taskid:' + task.id);
  }
}
