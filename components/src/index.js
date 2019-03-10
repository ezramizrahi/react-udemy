import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Guy" text="Nice!" />
      <CommentDetail author="Gianfranco" text="blahblahblah" />
      <CommentDetail author="Lucca" text="#wow #whoa" />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
