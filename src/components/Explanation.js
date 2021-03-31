import React, { useEffect } from 'react';

const Explanation = (props) => {
    const { explanation, copyright } = props;
    return (
        <>
            <h3>{explanation}</h3>
            <h5>{copyright}</h5>
        </>
    )
}

export default Explanation