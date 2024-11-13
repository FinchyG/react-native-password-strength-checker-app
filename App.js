import React, { useState } from "react";
import {View} from 'react-native';
import validator from 'validator'

// Components imports
import H2Header from "./components/H2Header";
import TextInput from "./components/TextInput";
import Instructions from "./components/Instructions";

const App = () => { 

	const [passwordStatus, setPasswordStatus] = useState('')
  const [passwordStatusColor, setPasswordStatusColor] = useState(''); 

	const validate = (value) => { 

		if (validator.isStrongPassword(value, { 
			minLength: 8, minLowercase: 1, 
			minUppercase: 1, minNumbers: 1, minSymbols: 1 
		})) { 
			setPasswordStatus('Is Strong Password');
      setPasswordStatusColor('green'); 
		} else { 
			setPasswordStatus('Is Not Strong Password');
      setPasswordStatusColor('red'); 
		} 
	} 

	return ( 
		<View style=
      {{
        flex: 1,
      }}
    > 
		  <H2Header textContent="Check Password Strength"/>
      <Instructions
        length="8"
        numOfUppercase="1"
        numOfLowercase="1"
        numOfNumbers="1"
        numOfSymbols="1"
      />
			<TextInput
        placeholder="type password here"
        name="passwordInput"
        onChange={(e) => validate(e.target.value)}
      />
			{passwordStatus === '' ? null : 
				<p style=
          {{ 
					fontWeight: 'bold', 
					color: passwordStatusColor, 
				  }}
        >
          {passwordStatus}
        </p>
      } 
		</View> 
	); 
} 

export default App