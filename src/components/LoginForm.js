import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card style={styles.container}>
        <CardSection>
          <Input
            onChangeText={this.onEmailChange.bind(this)}
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
            style={styles.inputStyle}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            style={styles.inputStyle}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;
  return {
    email,
    password,
    error,
    loading,
  };
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
});

// const styles = {
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red',
//   },
// };

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
