import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    width: 80,
    height: 25,
    backgroundColor: '#4871E0',
    marginTop: 15,
    marginRight: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    //textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});