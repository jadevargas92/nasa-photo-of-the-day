import React, { useEffect } from 'react';
import ReactPlayer from "react-player"
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
`;

const NasaImage = (props) => {
    const { image, mediaType } = props;
   return (
    <StyledDiv>
        {console.log(image)}
        {mediaType ===  'video'? 
        <ReactPlayer url={image}/> 
        : <img src = {image} />}
    </StyledDiv>
    )
}

export default NasaImage