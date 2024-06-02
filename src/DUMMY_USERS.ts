import { User } from './app/user/user.model';

export const DUMMY_USERS: User[] = [
  {
    id: '44abd6fb-ee69-4118-8886-a5b04b557470',
    name: 'John Doe',
    tasks: [
      {
        id: '958f4d0c-3a7c-4fb2-8117-759c5e306d2a',
        title: 'Task 1',
        description: 'Description of task 1',
      },
      {
        id: '958f4d0c-3a7c-4fb2-8117-759c5e306d2a',
        title: 'Task 1',
        description: 'Description of task 1',
      },
    ],
  },
  {
    id: '1e88117c-bd0b-4bc5-b308-4ff237f137cf',
    name: 'Robert Smith',
    tasks: [
      {
        id: '3e1d2a0a-8f5e-4b7e-9d4c-3b0f3a2d3b7a',
        title: 'Task 2',
        description: 'Description of task 2',
      },
    ],
  },
  {
    id: 'f6f5f1b3-3d7c-4b3b-8f2a-0b6d4b0d4d8d',
    name: undefined,
    tasks: [
      {
        id: 'f1d1b1c1-3d7c-4b3b-8f2a-0b6d4b0d4d8d',
        title: 'Task 3',
        description: 'Description of task 3',
      },
    ],
  },
];
