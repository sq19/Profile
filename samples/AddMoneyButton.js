import React from 'react';
import { Button, Alert, TextInput } from 'react-native';
import AddMoneyPage from './AddMoneyPage.js';

const AddMoney = props => {

  return(
    <Button
      title = "Add Money"
      backgroundColor = "#64aaff"
      onPress = {() => AddMoneyPage.setModalVisible(true)} // Open window to add money
    />

  );
};
export default AddMoney;
