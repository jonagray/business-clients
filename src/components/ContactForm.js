import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {contactUpdate} from '../actions';
import {CardSection, Input} from './common';

class ContactForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            // ES6 destructuring/syntax shortening example (line 17)
            // onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
            onChangeText={(value) =>
              this.props.contactUpdate({prop: 'name', value})
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={(value) =>
              this.props.contactUpdate({prop: 'phone', value})
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            value={this.props.email}
            onChangeText={(value) =>
              this.props.contactUpdate({prop: 'email', value})
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Notes"
            placeholder="Business Notes"
            value={this.props.notes}
            onChangeText={(value) =>
              this.props.contactUpdate({prop: 'notes', value})
            }
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

const mapStateToProps = (state) => {
  const {name, phone, email, notes} = state.contactForm;

  return {name, phone, email, notes};
};

export default connect(mapStateToProps, {contactUpdate})(ContactForm);
