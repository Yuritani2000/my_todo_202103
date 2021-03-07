import React, { useState } from 'react';
import { Parent, Container } from './StyledComponents/StyledComponents';
import TaskInput from '../../Molecules/TaskInput/index';
import { Tasks } from '../../../states/tasks';
import { PriorityType, KeyValueTypeOfPriorityType } from '../../../priorityType/priorityType';
import { Key } from 'readline';

export type HeaderProps = {
    addTask: (value: Tasks) => void;
    keyValuesOfPriorityType: string[];
}

const Header: React.FC<HeaderProps> = (props) => {
    const getCurrentDate = () => {
        const now = new Date();
        const yearStr = ('0' + now.getFullYear()).slice(-4);
        const monthStr = ('0' + (now.getMonth()+1)).slice(-2);
        const dateStr = ('0' + now.getDate()).slice(-2);
        console.log('set date to: ' + yearStr + '-' + monthStr + '-' + dateStr );
        return yearStr + '-' + monthStr + '-' + dateStr;
    };
    
    const {
        addTask,
        keyValuesOfPriorityType,
    } = props;
    const [taskNameValue, setTaskNameValue] = useState<string>('');
    const [deadlineValue, setDeadlineValue] = useState<string>(getCurrentDate());
    const [dropDownListValue, setDropDownListValue] = useState<string>('default');



    const onChangeTaskName = (value: string) => {
        setTaskNameValue(value);
    }

    const onChangeDeadline = (value: string) => {
        setDeadlineValue(value);
    }

    const onChangeDropDownList = (value: string) => {
        setDropDownListValue(value);
    }

    const onClickAddButton = () => {
        addTask({
                    name: taskNameValue,
                    id: new Date().getTime(),
                    deadlineYear: +deadlineValue.slice(0, 4),
                    deadlineMonth: +deadlineValue.slice(5, 7),
                    deadlineDate: +deadlineValue.slice(8, 10),
                    isDone: false,
                    priority: ((dropDownListValue == 'default') ? 'Minor' : dropDownListValue) as KeyValueTypeOfPriorityType,
                });
        setTaskNameValue('');
        setDeadlineValue(getCurrentDate());
        setDropDownListValue('default');
    }

    return (
        <Parent>
            <Container>
                <TaskInput  taskNameValue={taskNameValue}
                            deadlineValue={deadlineValue}
                            dropDownListValue={dropDownListValue}
                            dropDownListData={keyValuesOfPriorityType}
                            onChangeTaskName={onChangeTaskName}
                            onChangeDeadline={onChangeDeadline}
                            onChangeDropDownList={onChangeDropDownList}
                            onClickAddButton={onClickAddButton}
                            width='700px'
                            height='50px'/>
            </Container>
        </Parent>
    );
}

export default Header;