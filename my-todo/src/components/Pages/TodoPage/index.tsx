import React, { useState, useEffect } from 'react';
import ToDoTemplate from '../../Templates/ToDoTemplate/index';
import { Tasks } from '../../../states/tasks';
import { PriorityType } from '../../../priorityType/priorityType'

const ToDoPage: React.FC = () => {
    const [tasksState, setTasksState] = useState<Tasks[]>(new Array<Tasks>());
    const keyValuesOfPriorityType = Object.keys(PriorityType).filter(k => typeof PriorityType[k as keyof typeof PriorityType] === 'number');

    const addTask = (value: Tasks) => {
        if(value.name === '') return;
        console.log(value);
        setTasksState(tasksState.concat([value]));
    }

    const deleteTask = (taskId: number) => {
        setTasksState(tasksState.filter(item => item.id !== taskId ));
    }

    const handleTaskCompleted = (taskId: number) => {
        const targetItem = tasksState.find(item => item.id === taskId);
        const targetIndex = tasksState.findIndex(item => item.id === taskId)
        if(    targetItem  === undefined
            || targetItem  === null
            || targetIndex === undefined
            || targetIndex === null) return;
        targetItem.isDone = !targetItem.isDone;
        setTasksState(tasksState.slice(0, targetIndex).concat([targetItem]).concat(tasksState.slice(targetIndex+1)));
    }

    useEffect(()=> {console.log(tasksState);}, [tasksState]);

    return (
        <ToDoTemplate   addTask={addTask}
                        deleteTask={deleteTask}
                        handleTaskCompleted={handleTaskCompleted}
                        taskListData={tasksState}
                        keyValuesOfPriorityType={keyValuesOfPriorityType}/>

    )
}

export default ToDoPage;