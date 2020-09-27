import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {contactFetch} from '../actions';
import ListItem from './ListItem';
import {Spinner} from './common';

class ContactList extends Component {
  componentDidMount() {
    this.props.contactFetch();
  }
  renderItem = ({item}) => <ListItem contact={item} />;

  render() {
    return (
      <SafeAreaView style={{marginTop: 50}}>
        <View styles={styles.container}>
          <FlatList
            data={this.props.contact.sort((a, b) => a.name.localeCompare(b.name))}
            keyExtractor={(item) => item.key}
            renderItem={this.renderItem.bind(this)}
          />

          <Text style={styles.errorTextStyle}>
            {this.props.error && this.props.error}
          </Text>

          {this.props.loading && <Spinner />}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  const contact = _.map(state.contact, (val, uid) => {
    return {...val, uid};
  });

  return {contact};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

export default connect(mapStateToProps, {contactFetch})(ContactList);
