import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <h1>Task Tracks</h1>      
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);