import React from 'react';
import { faker } from '@faker-js/faker';

const CommentDetails =(props) =>{
    return(
        <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img src={faker.image.avatar()} className="" alt="avatar"  />
          </a>
  
          <div className="content">
            <a href="/" className="author">
              {props.name}
            </a>
            <div className="metadata">
              <span className="date" >{props.date}</span>
            </div>
            <div className="text">{props.text}</div>
          </div>
        </div>
      </div>
    );
};
export default CommentDetails;
