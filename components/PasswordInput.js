import React from "react";
import { StyleSheet, TextInput } from 'react-native';

function PasswordInput(props) {

  const styles = StyleSheet.create({
    textInputStyles: {
      borderWidth: 1,
      width: 300,
      padding: 10,
      marginBottom: 10,
  },
  });

  return (

    <TextInput
      style={styles.textInputStyles}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
    />
    
  );
}

export default PasswordInput;