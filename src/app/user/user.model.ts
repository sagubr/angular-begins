import { Task } from '../tasks/task/task.model';

export interface User {
  id: string;
  name: string | undefined;
  tasks?: Task[];
}
