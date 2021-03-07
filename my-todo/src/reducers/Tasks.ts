import { Tasks } from '../states/tasks';
import TasksAction from '../actions/Tasks/Action';
import TasksActionType from '../actions/Tasks/ActionType';

const initialState: Tasks[] = new Array<Tasks>();

export default (state: Tasks[] = initialState, action: TasksAction): Tasks[] => {
    switch(action.type) {
        case TasksActionType.ADD_TASK:
            return state.concat([action.newTask]);
        case TasksActionType.DELETE_TASK:
            return state.filter(item => item.id !== action.taskId);
        case TasksActionType.ALTER_TASK:
            const targetItem = state.find(item => item.id === action.taskId);
            const targetIndex = state.findIndex(item => item.id === action.taskId);
            if(    targetItem  === undefined
                || targetItem  === null
                || targetIndex === undefined
                || targetIndex === null) return state;
            return state.slice(0, targetIndex).concat([action.alteredTask]).concat(state.slice(targetIndex+1));
    }
}