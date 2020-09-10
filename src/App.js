import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <Text>Placeholder</Text>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
