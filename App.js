import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './Redux/app-redux';
import HomeScreen from './Screens/HomeScreen';
import * as firebase from 'firebase';
import ApiKeys from './Constants/ApiKeys'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  //  firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HomeScreen />
        </View>
      </Provider>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
