/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyD0yr73KFFjSGZcYWxyB965-N3ULUaOIew',
      authDomain: 'authentication-cb581.firebaseapp.com',
      databaseURL: 'https://authentication-cb581.firebaseio.com',
      projectId: 'authentication-cb581',
      storageBucket: '',
      messagingSenderId: '547554416899',
      appId: '1:547554416899:web:ed7d3b9838636a25',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
