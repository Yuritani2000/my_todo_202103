import TasksActionType from './ActionType';
import { AddTask, DeleteTask, AlterTask } from './Action';
import { Tasks } from  '../../states/tasks';

export const addTask = (newTask: Tasks): AddTask => {
    return {
        type: TasksActionType.ADD_TASK,
        newTask
    }
}

export const deleteTask = (taskId: number): DeleteTask => {
    return {
        type: TasksActionType.DELETE_TASK,
        taskId
    }
}

export const alterTask = (taskId: number, alteredTask: Tasks): AlterTask => {
    return {
        type: TasksActionType.ALTER_TASK,
        taskId,
        alteredTask,
    }
}