import React, { useEffect } from 'react';

const Title = (props) => {
    const { title, date } = props;
    // useEffect(() => {
        
    // }, [title])

    return ( 
        <>
            <h1>{title}</h1>
            <h3>{date}</h3>
        </>
   )
}

export default Title