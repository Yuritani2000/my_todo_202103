import React, {useEffect} from 'react';
import { Parent, Container, MarginBox } from './StyledComponents/StyledComponents';
import { Tasks } from '../../../states/tasks';
import TaskCard from '../../Molecules/TaskCard/index';

export type TaskListAreaProps = {
    taskListData: Tasks[];
    deleteTask: (taskId: number) => void;
    handleCompleted: (taskId: number) => void;
}

const TaskListArea: React.FC<TaskListAreaProps> = (props) => {
    const {
        taskListData,
        deleteTask,
        handleCompleted,
    } = props;

    useEffect(()=> {
        console.log('表示される情報: ' + taskListData);
    }, [taskListData]);

    return (
        <Parent>
            <Container>
                {
                    taskListData.map((item, index)=>{
                        return (
                            <MarginBox marginTop={20}>
                                <TaskCard   key={item.id}
                                            taskData={item}
                                            onClickDeleteButton={()=> deleteTask(item.id)}
                                            onClickCheckBox={()=> handleCompleted(item.id)}/>
                            </MarginBox>
                        )
                    })
                }
            </Container>
        </Parent>
    );
}

export default TaskListArea;