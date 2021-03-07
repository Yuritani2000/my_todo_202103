import React from 'react';
import Header from '../../Organisms/Header/index';
import TaskListArea from '../../Organisms/TaskListArea/index';
import { Parent, BehindHeader } from './StyledComponents/StyledComponents';
import { Tasks } from '../../../states/tasks';

export type ToDoTemplateProps = {
    addTask: (value: Tasks) => void;
    deleteTask: (taskId: number) => void;
    handleTaskCompleted: (taskId: number) => void;
    taskListData: Tasks[];
    keyValuesOfPriorityType: string[];
}

const ToDoTemplate: React.FC<ToDoTemplateProps> = (props) => {
    const {
        addTask,
        deleteTask,
        handleTaskCompleted,
        taskListData,
        keyValuesOfPriorityType,
    } = props;

    return (
        <Parent >
            <Header addTask={addTask}
                    keyValuesOfPriorityType={keyValuesOfPriorityType}/>
            <BehindHeader/>
            <TaskListArea   taskListData={taskListData}
                            deleteTask={deleteTask}
                            handleCompleted={handleTaskCompleted}/>
        </Parent>
    );
}

export default ToDoTemplate;