import React from 'react';
import { Parent } from './StyledComponents/StyledComponents';
import Input from '../../Atoms/Input/index';
import DropDownList from '../../Atoms/DropDownList/index';
import IconButton from '../../Atoms/IconButton/index';

export type TaskInputProps = {
    taskNameValue: string;
    deadlineValue: string;
    dropDownListValue: string;
    dropDownListData: string[];
    onChangeTaskName: (value: string) => void;
    onChangeDeadline: (value: string) => void;
    onClickAddButton: () => void;
    onChangeDropDownList: (value: string) => void;
    width?: string;
    height?: string;
}

const TaskInput: React.FC<TaskInputProps> = (props) => {
    const {
        taskNameValue,
        deadlineValue,
        dropDownListValue,
        dropDownListData,
        onChangeTaskName,
        onChangeDeadline,
        onClickAddButton,
        onChangeDropDownList,
        width,
        height,
    } = props;

    return (
        <Parent width={width} height={height}>
            <Input  value={taskNameValue}
                    placeholder='タスクを入力'
                    onChange={onChangeTaskName}
                    width='250px'
                    height='30px'
                    fontSize='1.5em'/>
            <Input  type='date'
                    value={deadlineValue}
                    onChange={onChangeDeadline}
                    width='300px'
                    height='30px'
                    fontSize='1.2em'/>
            <DropDownList   defaultMessage='重要度を選択'
                            data={dropDownListData}
                            value={dropDownListValue}
                            onChange={onChangeDropDownList}/>
            <IconButton onClick={onClickAddButton}
                        iconType='MdAddCircle'
                        backGroundColor='Transparent'
                        IconColor='Black'
                        size={40}/>
        </Parent>
    );
}

export default TaskInput;