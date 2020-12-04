import React from 'react';

const ColorDiv = (props) => {
    const style = {width: '80%', backgroundColor: props.color, height: '400px'};

    const handleClick = () => {
        props.picker(props.id)
    }

    return (
        <div style={style} onClick={handleClick}></div>
    )
}

export default ColorDiv;