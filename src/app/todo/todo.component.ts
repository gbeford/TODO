import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IToDo, IToDoList } from './todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public tForm: FormGroup;
  toDoObj: IToDo;
  list: IToDoList = { toDoList : []};
  id = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.tForm = this.formBuilder.group({
      inputCtrl: ['', [<any>Validators.required]]
    });
  }

  add() {
    if (this.tForm.valid) {
      this.toDoObj = {
        toDoItemId: this.id++,
        toDoItem: this.tForm.value.inputCtrl,
      };
      this.list.toDoList.push(this.toDoObj);
      console.log('form object', this.list);
      this.tForm.reset();
    }
  }
}



