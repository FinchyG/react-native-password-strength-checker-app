import React from "react";
import { StyleSheet } from 'react-native';

function TextInput(props) {

  const styles = StyleSheet.create({
    textInputStyles: {
      borderColor: 'lightgray',
      borderWidth: 3,
      borderRadius: 6,
      marginTop: 2
    }
  });

  return (
    <input
      style={styles.textInputStyles}
      type="text"
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
    />
  );
}

export default TextInput;