import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../styles/Color';

export type TextProps = {
    content: string,
    fontSize?: string;
    fontColor?: keyof typeof Color;
    isBold?: boolean;
    onClick?: ()=> void;
}

const Text: React.FC<TextProps> = (props) => {
    const {
        content,
        fontSize,
        fontColor,
        isBold,
        onClick = () => {},
    } = props;
    return (
        <StyledDiv  fontSize={fontSize}
                    fontColor={fontColor}
                    isBold={isBold}>
            {content}
        </StyledDiv>
    );
}

type StyledDivProps = {
    fontSize?: string;
    fontColor?: keyof typeof Color;
    isBold?: boolean;
}

const StyledDiv = styled.div<StyledDivProps>((props)=> `
    font-size: ${props.fontSize ? props.fontSize : '1em'};
    color: ${props.fontColor ? Color[props.fontColor] : Color.Black};
    font-weight: ${props.isBold ? 'bold' : 'normal'};
`);

export default Text;