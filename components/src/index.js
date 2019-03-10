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
      <ApprovalCard>
        <CommentDetail author="Gianfranco" avatar={faker.image.avatar()} text="blahblahblah" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Lucca" avatar={faker.image.avatar()} text="#wow #whoa" />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
