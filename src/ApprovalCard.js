import React from 'react';

const ApprovalCard = (props) =>{
    return (
        <div className='ui card'>
            <div className='Content'>{props.children}</div>
            <div className="extra content">
                <div className='ui two button'>
                    <div className='ui basic green button'>Approve</div>
                    <div className='ui basic red button'>Reject</div>
                </div>
            </div>
        </div>
    )
}
export default ApprovalCard;