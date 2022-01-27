import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  test: string = '';
  test2: number = 0;
  minDate = new Date();
  console = console;
  @Output() filledForm = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      description: this.fb.control(''),
      priority: this.fb.control(''),
      dueDate: this.fb.control('')
    })
  }

  processForm() {
    this.filledForm.emit(this.todoForm);
    const date = new Date();
    this.test = date.toLocaleString();
    this.test2 = this.todoForm.get('dueDate')?.value;
    this.todoForm.reset;
  }
}

