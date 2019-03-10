import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Guy" avatar={faker.image.avatar()} text="Nice!" />
      </ApprovalCard>
      <CommentDetail author="Gianfranco" avatar={faker.image.avatar()} text="blahblahblah" />
      <CommentDetail author="Lucca" avatar={faker.image.avatar()} text="#wow #whoa" />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
