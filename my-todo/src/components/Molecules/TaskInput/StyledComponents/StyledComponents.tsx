import styled from 'styled-components';
import { isPropertySignature } from 'typescript';

type ParentProps = {
    width?: string;
    height?: string;
}

export const Parent = styled.div<ParentProps>((props) => `
    width: ${props.width ? props.width : '100%'};
    height: ${props.height ? props.height : '100%'};
    display: flex;
    flex-direction: row;
`);