export type TaskColor = 'green' | 'red' | 'orange' | 'purple' | 'pink' | 'salad';

export type TaskModel = {
    title: string;
    time: string;
    color: TaskColor;
    id: string;
};