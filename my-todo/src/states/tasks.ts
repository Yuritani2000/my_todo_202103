import { PriorityType } from '../priorityType/priorityType';

export type Tasks = {
    name: string;
    id: number;
    deadlineYear: number;
    deadlineMonth: number;
    deadlineDate: number;
    isDone: boolean;
    priority: keyof typeof PriorityType;
}