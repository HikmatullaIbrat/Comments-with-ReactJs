// import logo from './logo.svg';
// import './App.css';
// import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

// function getTime(){
//   return (new Date()).toLocaleTimeString()
// }

function App() {
  return (
    // <div className="APP">
    //   <header className="ui header">
       
    //   <div>Current Time:</div>
    //   <h3>{getTime()}</h3>
    //   </header>
    // </div>

   
    <div>
        <ApprovalCard >
          <CommentDetails name="Hikmat" date="Today 4:00 p.m." text="Beautiful Pic" />
        </ApprovalCard> 

        
        <ApprovalCard >
          <CommentDetails name="Haleem" date="Today 8:00 p.m." text="Nice Pic" />
        </ApprovalCard>

        
        <ApprovalCard >
          <CommentDetails name="Hamad" date="Today 4:00 p.m." text="Georgous Pic" />
        </ApprovalCard>

    </div>



  );
}

export default App;
