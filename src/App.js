import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import GreenButton from './components/GreenButton';
import RedButton from './components/RedButton';
import Register from './components/Register';
import Login from './components/Login';
import firebase from './components/FireBase';

export default class App extends Component {

registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate('/login');
      });
    });
  };
  render() {
    return (
      <div>
        <Register path="/register" registerUser={this.registerUser}/>
       
      <Login path="/login" />
     
      </div>


    );
  }
}

export default App;
