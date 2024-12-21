import React from 'react';

// for access all the props
// const ApprovalCard = (props) =>{
//     return (
//         <div className='ui card'>
//             <div className='Content'>{props.children}</div>
//             <div className="extra content">
//                 <div className='ui two button'>
//                     <div className='ui basic green button'>Approve</div>
//                     <div className='ui basic red button'>Reject</div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// to access some of the props
const ApprovalCard = ({children}) =>{

    const {name, date, text} = children.props;
    return (
        <div className='ui card'>
            {/* to access all elements  */}
            <div className='Content'>{children}</div>

              {/* like this just access the name prop*/}
            {/* <div className='Content'>{name}</div> */}
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