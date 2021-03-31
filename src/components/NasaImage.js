import React, { useEffect } from 'react';

const NasaImage = (props) => {
    const { image } = props;
   return (
    <>
        <img src={image} />
    </>
    )
}

export default NasaImage