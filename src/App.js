import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {View} from 'react-native';
// import firebase from 'firebase';
import firebase from './firebase/config';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ContactEdit from './components/ContactEdit';
// import Router from './Router';

// import {createAppContainer} from 'react-navigation';
// import RootStack from './navigation';
// import NavigationService from './NavigationService';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContactList from './components/ContactList';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Login"
        component={LoginForm}
        options={({title: 'Login'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactList}
        options={({title: 'Contacts'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Edit"
        component={ContactEdit}
        options={{title: 'Edit'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
