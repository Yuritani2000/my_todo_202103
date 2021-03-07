import React from 'react';
import styled from 'styled-components';

type ModalProps = {
    width?: string;
    height?: string;
}

const Modal: React.FC<ModalProps> = (props) => {
    const {
        width,
        height,
    } = props;
    return (
        <StyledDiv width={width} height={height}></StyledDiv>
    )
}

const StyledDiv = styled.div<ModalProps>((props)=> `
    width: ${props.width ? props.width : '10cm'};
    height: ${props.height ? props.height : '15cm'};
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.15);
`);