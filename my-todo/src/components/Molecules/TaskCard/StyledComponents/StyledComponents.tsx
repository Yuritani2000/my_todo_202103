import styled from 'styled-components';
import { Color } from '../../../../styles/Color';

type ColorBoxProps = {
    backgroundColor: keyof typeof Color;
    opacity: number;
    width?: string;
    height?: string;
}

export const ColorBox = styled.div<ColorBoxProps>((props) => `
    background-color: ${props.backgroundColor ? Color[props.backgroundColor] : Color.Gray};
    opacity: ${props.opacity ? props.opacity : '1.0'};
    width: ${props.width ? props.width : '100%'};
    height: ${props.height ? props.height : '100%'};
    border-radius: 4px;
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`);

export const TaskTextParent = styled.div(()=> `
    flex-grow: 2;
`);