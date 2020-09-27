import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { contactUpdate } from '../actions';
import { CardSection, Input, LargeInput } from './common';

class ContactForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={(value) =>
              this.props.contactUpdate({ prop: 'name', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={(value) =>
              this.props.contactUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            placeholderTextColor="#000"
            value={this.props.email}
            onChangeText={(value) =>
              this.props.contactUpdate({ prop: 'email', value })
            }
          />
        </CardSection>

        <CardSection style={styles.largeInput}>
          <LargeInput
            style={styles.input}
            label="Notes"
            placeholder="Business Notes"
            value={this.props.notes}
            onChangeText={(value) =>
              this.props.contactUpdate({ prop: 'notes', value })
            }
            multiline={true}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  largeInput: {
    height: 200,
    maxHeight: 200,
  },
  input: {
    height: 200,
  }
});

const mapStateToProps = (state) => {
  const { name, phone, email, notes } = state.contactForm;

  return { name, phone, email, notes };
};

export default connect(mapStateToProps, { contactUpdate })(ContactForm);
