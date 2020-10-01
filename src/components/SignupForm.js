import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  passwordConfirm,
  signupUser,
} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';

class SignupForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onConfirmPasswordChange(text) {
    this.props.passwordConfirm(text);
  }

  onButtonPress() {
    const {email, password, confirmedPassword} = this.props;
    if (this.props.password === this.props.confirmedPassword) {
      this.props.signupUser({email, password, confirmedPassword});
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Sign Up</Button>;
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

  confirmError() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <Text style={styles.errorTextStyle}>Passwords Do Not Match</Text>
      </View>
    );
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
            keyboardType={'email-address'}
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

        <CardSection>
          <Input
            secureTextEntry
            label="Confirm"
            placeholder="retype password"
            onChangeText={this.onConfirmPasswordChange.bind(this)}
            value={this.props.confirmedPassword}
            style={styles.inputStyle}
          />
        </CardSection>

        {this.renderError()}
        {this.props.password !== this.props.confirmedPassword &&
        this.props.confirmedPassword.length > 1
          ? this.confirmError()
          : null}

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {email, password, confirmedPassword, error, loading} = auth;
  return {
    email,
    password,
    confirmedPassword,
    error,
    loading,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 30,
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

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  passwordConfirm,
  signupUser,
})(SignupForm);
