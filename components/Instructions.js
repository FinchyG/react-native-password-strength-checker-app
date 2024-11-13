import React from 'react';
import {View, Text} from 'react-native';

function Instructions(props) {
  
  return (
    <View style=
      {{
        marginLeft: 6
      }}
    >
      <Text>Password must:</Text>
      <Text>• be {props.length} characters long</Text>
      <Text>• contain {props.numOfUppercase} uppercase letters</Text>
      <Text>• contain {props.numOfLowercase} lowercase letters</Text>
      <Text>• contain {props.numOfNumbers} numbers</Text>
      <Text>• contain {props.numOfSymbols} symbols (!, £, $, ?, etc.)</Text>
    </View>
  );
}

export default Instructions;