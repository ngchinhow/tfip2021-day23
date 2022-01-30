import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { priorityOptions } from 'src/app/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  minDate = new Date();
  priorityOptions = priorityOptions;
  @Input() todoForm!: FormGroup;
  @Output() todoFormChange = new EventEmitter<FormGroup>();
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      description: this.fb.control(''),
      priority: this.fb.control(''),
      dueDate: this.fb.control('')
    });
  }

  processForm() {
    this.todoFormChange.emit(this.todoForm);
    this.todoForm.reset();
    this.formGroupDirective.resetForm();
  }

  capitalCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

