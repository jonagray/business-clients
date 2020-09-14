import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import ContactForm from './ContactForm';
import {
  contactUpdate,
  contactSave,
  contactDelete,
  clearContactForm,
} from '../actions';
import {Card, CardSection, Button, Confirm} from './common';

class ContactEdit extends Component {
  state = {showModal: false};

  componentDidMount() {
    _.each(this.props.contact, (value, prop) => {
      this.props.contactUpdate({prop, value});
    });
  }

  onButtonPress() {
    const {name, phone, email, notes} = this.props;
    this.props.contactSave({
      name,
      phone,
      email,
      notes,
      uid: this.props.contact.uid,
    });
  }

  onTextPress() {
    const {phone} = this.props;
    Communications.text(phone);
  }

  onAccept() {
    const {uid} = this.props.contact;
    this.props.contactDelete({uid});
  }

  onDecline() {
    this.setState({showModal: false});
  }

  render() {
    return (
      <Card>
        <ContactForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Contact</Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({showModal: !this.state.showModal})}>
            Delete Contact
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}>
          Are you sure you want to delete this contact?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, email, notes} = state.contactForm;
  return {name, phone, email, notes};
};

export default connect(mapStateToProps, {
  contactUpdate,
  contactSave,
  contactDelete,
})(ContactEdit);
