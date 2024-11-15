import React from "react";
import { StyleSheet, View, TextInput } from 'react-native';

function PasswordInput(props) {

  const styles = StyleSheet.create({
    textInputStyles: {
      borderColor: 'lightgray',
      borderWidth: 3,
      borderRadius: 6,
      marginTop: 2
    }
  });

  return (

    <View style=
    {{
      flex: 1
    }}
    >
      <TextInput
        style={styles.textInputStyles}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
      />
    </View>
  );
}

export default PasswordInput;