import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task?: Task;
  @Output() complete$: EventEmitter<Task> = new EventEmitter<Task>();

  onCompleteTask(task?: Task): void {
    this.complete$.emit(this.task);
  }
}
