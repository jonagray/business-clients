import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import LoginForm from './components/LoginForm';
import ContactList from './components/ContactList';
import ContactCreate from './components/ContactCreate';
import ContactEdit from './components/ContactEdit';
import {Feather} from 'feather-icons';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 30}}>
      <Scene key="root">
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle}
            initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => {
              Actions.contactCreate();
            }}
            key="contactList"
            component={ContactList}
            title="Contacts"
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle}
            initial
          />
          <Scene
            key="contactCreate"
            component={ContactCreate}
            title="Create Contact"
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle}
          />
          <Scene
            key="contactEdit"
            component={ContactEdit}
            title="Edit Contact"
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  navBar: {
    height: 80,
    paddingTop: 15,
    backgroundColor: '#3740FE',
  },
  navTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RouterComponent;
