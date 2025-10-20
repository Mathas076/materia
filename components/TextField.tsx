import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const TextField = () => {

  return (
        <TextInput
          style={styles.input}
          placeholder='example@email.com'
        />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    minWidth: 130,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextField;