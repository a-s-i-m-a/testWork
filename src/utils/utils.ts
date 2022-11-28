import { TaskColor, TaskModel } from '../models/task.models';


export const generateTaskId = () => Math.random().toString(10).slice(2);

export const renderTask = (title: string, time: string, color: TaskColor) => ({
  title,
  time,
  color,
  id: generateTaskId(),
});

export const renderColumn = (title: string, tasks: TaskModel[], completed?: boolean) => ({
  title,
  tasks,
  completed,
});

