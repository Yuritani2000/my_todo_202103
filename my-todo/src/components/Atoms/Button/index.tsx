import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../styles/Color';

export type ButtonProps = {
    onClick: () => void;
    label?: string;
    backGroundColor?: keyof typeof Color;
    fontColor?: keyof typeof Color;
    borderRadius?: string;
    width?: string;
    height?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        onClick,
        label = '',
        backGroundColor,
        fontColor,
        borderRadius,
        width,
        height,
    } = props;
    return (
        <StyledButton   onClick={()=> {console.log('button clicked'); onClick()}}
                        backGroundColor={backGroundColor}
                        fontColor={fontColor}
                        borderRadius={borderRadius}
                        width={width}
                        height={height}>
            {label}
        </StyledButton>
    )
}

type StyledButtonProps = {
    backGroundColor?: keyof typeof Color;
    fontColor?: keyof typeof Color;
    borderRadius?: string;
    width?: string;
    height?: string;
}

const StyledButton = styled.button<StyledButtonProps>((props)=> `
    background-color: ${props.backGroundColor ? Color[props.backGroundColor] : Color.Gray};
    color: ${props.fontColor ? Color[props.fontColor] : Color.Black};
    border-radius: ${props.borderRadius ? props.borderRadius : '2px'};
    width: ${props.width ? props.width : '100%'};
    height: ${props.height ? props.height : '100%'};
    text-align: center;
    line-height: ${props.height ? props.height : '100%'};
    cursor: pointer;
`);

export default Button;