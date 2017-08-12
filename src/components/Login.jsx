import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import database from 'firebase-database';
let firebase = database.firebase;

export default class Login extends React.Component {

  attemptLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then( result => {}).catch( error => { console.warn('error loggin in', error)})
  }

  render() {
    return (
      <div className='container login'>
        <h4 className="page-header">Log In</h4>
        <button className="" onClick={this.attemptLogin}>Log in with Google</button>
      </div>
    );
  }
}
