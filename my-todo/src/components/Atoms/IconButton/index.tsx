import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../styles/Color';
import * as Icons from 'react-icons/md';

export type IconButtonProps = {
    onClick: () => void;
    iconType?: keyof typeof Icons;
    backGroundColor?: keyof typeof Color;
    IconColor?: keyof typeof Color;
    borderRadius?: string;
    size?: number;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
    const {
        onClick,
        iconType='MdDelete',
        backGroundColor,
        IconColor = 'Black',
        borderRadius,
        size = 40,
    } = props;
    const Icon = Icons[iconType];

    return (
        <StyledButton   onClick={(e)=> { console.log('button clicked'); onClick()}}
                        backGroundColor={backGroundColor}
                        borderRadius={borderRadius}
                        width={size + 'px'}
                        height={size + 'px'}>
            <Icon color={Color[IconColor]} size={size}/>
        </StyledButton>
    )
}

type StyledButtonProps = {
    backGroundColor?: keyof typeof Color;
    borderRadius?: string;
    width?: string;
    height?: string;
}

const StyledButton = styled.button<StyledButtonProps>((props)=> `
    background-color: ${props.backGroundColor ? Color[props.backGroundColor] : Color.Gray};
    border-radius: ${props.borderRadius ? props.borderRadius : '2px'};
    width: ${props.width ? props.width : '100%'};
    height: ${props.height ? props.height : '100%'};
    text-align: center;
    line-height: ${props.height ? props.height : '100%'};
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: none;
`);

export default IconButton;