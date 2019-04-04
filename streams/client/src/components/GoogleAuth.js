import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '42410253245-d5gtgadj0i4jtg01ab94honu61f2snb0.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>googleauth</div>
    );
  }
}

export default GoogleAuth;
