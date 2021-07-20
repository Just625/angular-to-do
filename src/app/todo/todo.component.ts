import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  toDoList: Todo[] = [];
  content = new FormControl();

  constructor() {
  }

  ngOnInit() {
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.toDoList.push(todo);
      this.content.reset();
    }
  }

  toggleToDo(i: number) {
    this.toDoList[i].complete = !this.toDoList[i].complete;
  }
}
