import React from 'react';
import { ColorBox, TaskTextParent } from './StyledComponents/StyledComponents';
import IconButton from '../../Atoms/IconButton/index';
import Text from '../../Atoms/Text';
import { Tasks } from '../../../states/tasks';

export type TaskCardProps = {
    taskData: Tasks;
    onClickDeleteButton: ()=> void;
    onClickCheckBox: ()=> void;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
    const {
        taskData,
        onClickDeleteButton,
        onClickCheckBox,
    } = props;

    const setColor = (priority: typeof taskData.priority) => {
        switch(priority){
            case 'Fatal':
                return 'Sangoiro';
            case 'Important':
                return 'Ominaeshi';
            case 'Minor':
                return 'Usumoegi';
            case 'NotAtAll':
                return 'Kamenozoki';
            default:
                console.log('task color set error.');
                return 'Gray';
        }
    }

    return (
        <ColorBox   backgroundColor={setColor(taskData.priority)}
                    opacity={taskData.isDone===true ? 0.5 : 1.0}
                    width='100%'
                    height='100px'>
            <IconButton onClick={onClickCheckBox}
                        iconType={taskData.isDone===true ? 'MdCheckBox' : 'MdCheckBoxOutlineBlank'}
                        backGroundColor='Transparent'
                        IconColor='Black'
                        size={40}/>
            <TaskTextParent>
                <Text   content={taskData.name}
                        fontSize='2em'
                        fontColor='Black'
                        isBold={false}/>
                <Text   content={'期限: ' + taskData.deadlineYear + '年' + taskData.deadlineMonth + '月' + taskData.deadlineDate + '日'}
                        fontSize='1.4em'
                        fontColor='DarkGray'
                        isBold={false}/>
            </TaskTextParent>
            <IconButton onClick={onClickDeleteButton}
                        iconType='MdDelete'
                        backGroundColor='Transparent'
                        IconColor='Beniaka'
                        size={40}/>
        </ColorBox>
    );
}

export default TaskCard;