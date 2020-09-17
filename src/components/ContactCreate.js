import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {clearContactForm, contactCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import ContactForm from './ContactForm';

class ContactCreate extends Component {
  componentDidMount() {
    this.props.clearContactForm();
  }
  onButtonPress() {
    const {name, phone, email, notes} = this.props;
    this.props.contactCreate({name, phone, email, notes});
  }

  render() {
    return (
      <SafeAreaView>
        <Card>
          <ContactForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
          </CardSection>
        </Card>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, email, notes} = state.contactForm;

  return {name, phone, email, notes};
};

export default connect(mapStateToProps, {clearContactForm, contactCreate})(
  ContactCreate,
);
