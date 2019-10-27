import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import AddMoneyTextBox from './AddMoneyTextBox.js';

export default class AddMoneyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentInputValue: 0,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
    this.setCurrentInputValue = this.setCurrentInputValue.bind(this);
  }


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setCurrentInputValue(value) {
    this.setState({currentInputValue: value})
  }

  render() {
    const balance = this.state.balance;

    return (
      <View style={styles.backgroundButton}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.backgroundModal}>
            <View>
              <Text style={styles.descriptionText}>
                How much money would you like to add?
              </Text>

              <AddMoneyTextBox setCurrentInputValue={this.setCurrentInputValue}/>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  //this.props.addToBalance(this.state.currentInputValue);
                }}>
                <Text style={styles.descriptionText}>
                  Close
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.descriptionText}>Add Money</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: '#4d4d4d',
    textAlign: 'center',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundButton: {
    backgroundColor: '#acd6ff',
    marginTop: 22,
  },
  backgroundModal:
  {
    marginTop: 150,
    marginLeft: 22,
    marginRight: 22,
    justifyContent: 'center',
  }
});
