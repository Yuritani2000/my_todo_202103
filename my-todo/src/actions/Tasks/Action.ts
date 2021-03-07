import TasksActionType from './ActionType';
import { Tasks } from '../../states/tasks';

export type AddTask = {
    type: TasksActionType.ADD_TASK,
    newTask: Tasks,
}

export type DeleteTask = {
    type: TasksActionType.DELETE_TASK,
    taskId: number,
}

export type AlterTask = {
    type: TasksActionType.ALTER_TASK,
    taskId: number,
    alteredTask: Tasks,
}

type TasksAction = AddTask | DeleteTask | AlterTask

export default TasksAction;