import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('Ex: $100');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textBox}
        //{clearTextOnFocus(true)}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
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
  }
});
