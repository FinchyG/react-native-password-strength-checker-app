import React from "react";
import {StyleSheet, Text} from 'react-native';

function H2Header(props) {

  const styles = StyleSheet.create({
    h2Styles: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 30
    }
  });
  
  return (
    <Text style={styles.h2Styles}>
      {props.textContent}    
    </Text>
  );
}

export default H2Header;