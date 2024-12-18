// import logo from './logo.svg';
// import './App.css';
// import faker from 'faker';
import { faker } from '@faker-js/faker';


function getTime(){
  return (new Date()).toLocaleTimeString()
}

function App() {
  return (
    // <div className="APP">
    //   <header className="ui header">
       
    //   <div>Current Time:</div>
    //   <h3>{getTime()}</h3>
    //   </header>
    // </div>

    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} class="" alt="avatar"  />
        </a>

        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date" >Today at 6:00 p.m.</span>
          </div>
          <div className="text">Nice Blog Post!</div>
        </div>
      </div>
    </div>


  );
}

export default App;
