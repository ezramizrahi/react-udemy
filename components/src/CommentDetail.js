import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at 12:00PM</span>
        </div>
        <div className="text">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
