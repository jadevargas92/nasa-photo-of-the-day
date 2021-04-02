import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width:60%;
    display: flex;
    margin: auto;
`;

const Explanation = (props) => {
    const { explanation, copyright } = props;
    return (
        <StyledDiv>
            <h3>{explanation}</h3>
            <h5>{copyright}</h5>
        </StyledDiv>
    )
}

export default Explanation