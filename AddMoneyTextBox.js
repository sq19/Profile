import React, { Component } from 'react';
import { Alert, Text, TextInput, StyleSheet, View, Button, Keyboard, TouchableOpacity } from 'react-native';
//import { loadSettings, saveSettings } from '../../../src/storage/settingsStorage.js';

var userData = require('../../../data.json');
var balance = parseInt(userData.users[0].balance);

//export default function UselessTextInput(props) {
class AddMoneyTextBox extends Component{
  constructor(props) {
    super(props);
    this.state = {name: balance}
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(name) {
    this.setState({name});
  }

  handleSubmit() {
    //saveSettings(this.state);
    balance += parseInt(this.state.name);
    userData.users[0].balance = balance;
  }

  // async componentDidMount() {
  //   const initialState = await loadSettings();
  //
  //   this.setState(initialState);
  // }
  // const [value, onChangeText] = React.useState('Ex: $100');
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textBox}
          //clearTextOnFocus={() => this.setState({text: ' '})}
          placeholder="100"
          onBlur={Keyboard.dismiss}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          keyboardType='number-pad'
          //onSubmitEditing={props.setCurrentInputValue(value)}
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              this.handleSubmit();
              Alert.alert('You have added $' + this.state.name + ' into your balance.');
            }}
            >
            <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBox: {
    alignItems: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    justifyContent: 'center',
  },
  container: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  saveButton: {
  borderWidth: 1,
  borderColor: '#007BFF',
  backgroundColor: '#007BFF',
  padding: 15,
  margin: 5
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default AddMoneyTextBox
