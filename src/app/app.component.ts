import { Component } from '@angular/core';
import { User } from './user/user.model';
import { Task } from './tasks/task/task.model';
import { DUMMY_USERS } from 'src/DUMMY_USERS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users?: User[] = DUMMY_USERS;
  tasks?: Task[];

  onSelectUser(user?: User): void {
    this.tasks = user?.tasks;
  }
}
