// import logo from './logo.svg';
// import './App.css';
// import faker from 'faker';
// import CommentDetails from './CommentDetails';
// import ApprovalCard from './ApprovalCard';
// import AssignmentWork from './AssignmentWork';
// import AssignmentWork2 from './AssignmentWork2';
// import ReactDOM from 'react-dom';
import React from 'react';
import Searchbar from './components/SearchBar';
import PasswordValidator from './components/PasswordValidator';
import axios from 'axios';
// import SeasonDisplay from './SeasonDisplay';
// import Spinner from './Spinner';
import ImageList from './components/ImageList';
import UsersList from './components/UsersList';


// Handling User Inputs with forms and events

// making a Searchbar component and after searching it will bring the things from an API
const users = [
  {id:1, name:"hikmatullah"},
  {id:2, name:"Edrees"},
  {id:3, name:"Raheem"},
  {id:4, name:"Zamir Kabiri"},

];
class App extends React.Component{
  state = {images: []};
 
  // onSearchSubmit(term){
  //   axios.get('https://api.usnplash.com/search/photos',{
  //     // params: specifies the different query string parameters, so we want to add into the request
  //     params: {query:term},
  //     headers: {
  //       Authorization: 'Client-ID S51ZjwzqiDBew5BSfVYa_mHU3K0bqTDoK1P8KtkgnyM'
  //     }
  //     // and to make sure that request is issued on browser, just go to inspect->network
  //   }).then(response =>{
  //     // response will fetch data from API
  //     console.log(response);
  //   });
  // }
  
  // onSearchSubmit is not built-in but it well be called in Searchbar component by the help of this line:
  //  this.props.onSubmit(this.state.term); at onFormSubmit() 

  // to fetch data we should use async or then keyword on above onSearchSubmit which commented we used then, and in below we used async

  onSearchSubmit = async (term) => 
    { try {
       const response = await axios.get('https://api.unsplash.com/search/photos',
        { 
         params: { query: term },
         headers: { Authorization: 'Client-ID S51ZjwzqiDBew5BSfVYa_mHU3K0bqTDoK1P8KtkgnyM' }
        });
        // the collection of data which is returned by axios api
         console.log(response.data.results);
         this.setState({images: response.data.results});
         } 
      catch (error) { console.error("Error fetching data:", error); 

         } 
        
  };

  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <Searchbar onSubmit={this.onSearchSubmit}/> 
        {/* Found: {this.state.images.length} images */}
         <ImageList images_prop = {this.state.images} />
        {/* <PasswordValidator /> */}
        <UsersList all_users = {users} />
        {/* console.log(users.) */}
      </div>
    );
  }
}



// function getTime(){
//   return (new Date()).toLocaleTimeString()
// }

// Class component
// class App extends React.Component{

//     state = {lat:null, errorMessage: "No Latitude value available"};


//     // the upper line state is equivalent to the lower whole constructor therefore we cleaned the consturctor
//   // constructor(props){
//   //   super(props);

//   //   // creating state object within class component
//   //   //This is the only time we do direct assignment to this.state, instead we should use setState
//   //   this.state = {lat:null, errorMessage: 'Latitude doesnt exist'};

    
//   // }

//     // usage of component did mount
//   componentDidMount(){

//     // we have shown lat value where we set it manually, because to show result even if this is no internet
//     // const manuallySetLat = this.state.lat;

//     window.navigator.geolocation.getCurrentPosition(
//       // position => console.log(position),
//       // err  => console.log(err)

//       position => {
//         // we called setState
//         this.setState({lat:position.coords.latitude});

//         // we do not call directly, so we should do it by calling setState
//         // this.state.lat  = position.  coords.latitude;
//       },
//       err => {
//         this.setState({errorMessage: err.message});
//         }

//     ); // end of window.navigator.geolocation.getCurrentPosition
    
//     // Optional: if you want to keep using the manually set latitude in case of error
//     // if(!this.state.lat || this.state.errorMessage){
//     //   this.setState({ lat: manuallySetLat});
//     // }
      
//   }

//   // We make renderContentHelper to avoid having multiple return Statements in render() body and instead
//   //  we use this renderContentHelper to handle multiple return statements

//   renderContentHelper(){
//      // if we don't have lat so we show error message
//      if(this.state.errorMessage && !this.state.lat){
//       return <div>Error: {this.state.errorMessage}</div>;
//     }
//     // latitude value was existed
//     if (!this.state.errorMessage && this.state.lat){
//       // return <div>Latitude: {this.state.lat}</div>;
      

//       // to pass state as props
//       return <SeasonDisplay lat={this.state.lat} />
//     }
  
//     // if both were not existed, or value was in loading
//     return <Spinner message="Please accept location request, if you asked for, else wait..."/>;
//   }


//   render(){

//    return(
//     <div className='border red'>
//       {this.renderContentHelper()}
//     </div>
//    );
     
//   }
// }








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
