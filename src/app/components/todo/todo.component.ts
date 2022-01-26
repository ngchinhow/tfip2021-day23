import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  test: string = '';
  @Output() filledForm = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      description: this.fb.control(''),
      priority: this.fb.control(''),
      dueDate: this.fb.control('', this.dateInPast('dueDate'))
    })
  }

  dateInPast(dueDateField: string, errorName: string = 'dateInPast'): ValidatorFn {
    return (FormGroup: AbstractControl): { [key: string]: boolean } | null => {
      const dueDate = FormGroup.get(dueDateField)?.value;
      let currentDate = new Date();
      if (dueDate != null && dueDate < currentDate) {
        return { [errorName]: true }
      }
      return null;
    }
  }

  processForm() {
    this.filledForm.emit(this.todoForm);
    this.todoForm.reset;
  }
}
