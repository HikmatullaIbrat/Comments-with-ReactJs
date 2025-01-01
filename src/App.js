// import logo from './logo.svg';
// import './App.css';
// import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import AssignmentWork from './AssignmentWork';
import AssignmentWork2 from './AssignmentWork2';
import ReactDOM from 'react-dom';
import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// function getTime(){
//   return (new Date()).toLocaleTimeString()
// }

// Class component
class App extends React.Component{

    state = {lat:-34.382, errorMessage: "No Latitude value available"};


    // the upper line state is equivalent to the lower whole constructor therefore we cleaned the consturctor
  // constructor(props){
  //   super(props);

  //   // creating state object within class component
  //   //This is the only time we do direct assignment to this.state, instead we should use setState
  //   this.state = {lat:null, errorMessage: 'Latitude doesnt exist'};

    
  // }

    // usage of component did mount
  componentDidMount(){

    // we have shown lat value where we set it manually, because to show result even if this is no internet
    const manuallySetLat = this.state.lat;

    window.navigator.geolocation.getCurrentPosition(
      // position => console.log(position),
      // err  => console.log(err)

      position => {
        // we called setState
        this.setState({lat:position.coords.latitude});

        // we do not call directly, so we should do it by calling setState
        // this.state.lat  = position.  coords.latitude;
      },
      err => {
        this.setState({errorMessage: err.message});
        }

    ); // end of window.navigator.geolocation.getCurrentPosition
    
    // Optional: if you want to keep using the manually set latitude in case of error
    if(!this.state.lat || this.state.errorMessage){
      this.setState({ lat: manuallySetLat});
    }
      
  }


  render(){

    // if we don't have lat so we show error message
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }
    // latitude value was existed
    if (this.state.errorMessage && this.state.lat){
      // return <div>Latitude: {this.state.lat}</div>;
      

      // to pass state as props
      return <SeasonDisplay lat={this.state.lat} />
    }
  
    // if both were not existed, or value was in loading
    return <Spinner message="Please accept location request, if you asked for, else wait..."/>;
     
  }
}

// funtional Component
// function App() {
//           window.navigator.geolocation.getCurrentPosition(
//             position => console.log(position),
//             err => console.log(err)
//           );
//   return (
//     // <div className="APP">
//     //   <header className="ui header">
       
//     //   <div>Current Time:</div>
//     //   <h3>{getTime()}</h3>
//     //   </header>
//     // </div>

   
//     <div>
//         {/* assingment two div */}
//         {/* the nested elements inside the AssignmentWork2 are passed are accessed by props.children  */}
//         <div>
//           <AssignmentWork2>
//             <div className='ui icon header'>
//               <i className='pdf file outline icon '></i>
//               No documents are listed for this customer.
//             </div>
//             <div className='ui primary button'>Add document</div>
//           </AssignmentWork2>
//           <AssignmentWork2>
//             <h4 className='ui header'>For Your information</h4>
//             <p>lorem ipsumsQui id laboris deserunt eiusmod sint nisi eiusmod cupidatat ut esse.
//                 Consectetur nisi et pariatur proident labore magna aute deserunt. Laboris ea minim sunt ad.
//                 Ullamco aliquip veniam sit ut consectetur. Ipsum ea eu sunt minim sunt consequat Lorem.
//                 Ut ut tempor cillum adipisicing occaecat amet proident.
//                 In ea officia consequat labore excepteur ex incididunt dolore dolor.
//                 Duis officia sunt tempor cillum non officia amet minim cupidatat adipisicing.
//                 Dolor culpa veniam voluptate veniam anim aute pariatur eu.
//             </p>
//           </AssignmentWork2>
//         </div>




//       <AssignmentWork header = "Header is Updated" text = "The Contents are Updated as well by props"/>


//         <ApprovalCard >
//           <CommentDetails name="Hikmat" date="Today 4:00 p.m." text="Beautiful Pic" />
//         </ApprovalCard> 

        
//         <ApprovalCard >
//           <CommentDetails name="Haleem" date="Today 8:00 p.m." text="Nice Pic" />
//         </ApprovalCard>

        
//         <ApprovalCard >
//           <CommentDetails name="Hamad" date="Today 4:00 p.m." text="Georgous Pic" />
//         </ApprovalCard>

//         <ApprovalCard >
//           <CommentDetails name="Hamad" date="Today 4:00 p.m." text="Georgous Pic" />
//         </ApprovalCard>
//     </div>



//   );
// }

export default App;
