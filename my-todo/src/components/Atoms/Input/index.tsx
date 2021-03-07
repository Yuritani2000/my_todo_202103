import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../styles/Color';

export type InputProps = {
    value: string;
    onChange: (value: string) => void;
    type?: string;
    width?: string;
    height?: string;
    placeholder?: string;
    fontSize?: string;    
}

const Input: React.FC<InputProps> = (props) => {
    const {
        value,
        onChange,
        type = 'text', 
        width,
        height,
        placeholder = '',
        fontSize,
    } = props;
    return (
        <StyledInput    type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e)=> {console.log('input changed'); onChange(e.target.value)}}
                        width={width}
                        height={height}
                        fontSize={fontSize}/>
    )
}

type StyledInputProps = {
    width?: string;
    height?: string;
    fontSize?: string;
}

const StyledInput = styled.input<StyledInputProps>((props)=> `
    width: ${props.width ? props.width : '100%'};
    height: ${props.height ? props.height : '100%'};
    font-size: ${props.fontSize ? props.fontSize : '100%'};
`);

export default Input;