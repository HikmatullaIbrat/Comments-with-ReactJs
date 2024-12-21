import React from 'react';

const AssignmentWork = (props) =>{
    return (
        <div className='ui message'>
            {/* <div className='header'>Changes in Services </div> */}
            <div className='header'>{props.header} </div>

            {/* <p>We just Update our privacy and policy here to better service our customers.</p> */}
            <p>{props.text}</p>

        </div>
    )
};
export default AssignmentWork;
