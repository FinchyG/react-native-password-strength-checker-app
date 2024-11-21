import React, { useState } from 'react';
import {View, SafeAreaView, Text, StyleSheet} 
    from 'react-native';

// component imports
import H2Header from './components/H2Header';
import PasswordInput from './components/PasswordInput';

const PasswordStrengthCheckerApp = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [strength, setStrength] = useState('');

    const checkPasswordStrength = (input) => {
        let newSuggestions = [];
        if (input.length < 8) {
            newSuggestions.push('Password should be at least 8 characters long')
        }
        if (!/\d/.test(input)) {
            newSuggestions.push('Add at least one number')
        }
        if (!/[A-Z]/.test(input)) {
            newSuggestions.push('Include uppercase letters')
        }
        if (!/[a-z]/.test(input)) {
            newSuggestions.push("Include lowercase letters")
        }
        if (!/[^A-Za-z0-9]/.test(input)) {
            newSuggestions.push('Include at least one special character')
        }

        setSuggestions(newSuggestions);

        // Determine password strength based on suggestions
        if (newSuggestions.length === 0) {
            setStrength('Very Strong');
        }
        else if (newSuggestions.length <= 1) {
            setStrength('Strong')
        }
        else if (newSuggestions.length <= 2) {
            setStrength('Moderate')
        }
        else if (newSuggestions.length <= 3) {
            setStrength('Weak')
        }
        else {
            setStrength('Too Weak')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Heading}>
                <H2Header
                  textContent="Password Strength Checker"
                />
            </View>
            <PasswordInput
              placeholder="type password here..."
              onChangeText={(text) => {
                checkPasswordStrength(text)
              }}
            />
            <Text style={styles.strengthText}>
                Password Strength: {strength}
            </Text>
            <Text style={styles.suggestionsText}>
                {suggestions.map((suggestion, index) => (
                    <Text key={index}>
                        {suggestion}{'\n'}
                    </Text>))}
            </Text>
            <View style={styles.strengthMeter}>
                <View style={{width: `${(strength === 'Very Strong' ? 100 :
                                      (strength === 'Strong' ? 75 :
                                      (strength === 'Moderate' ? 50 :
                                      (strength === 'Weak' ? 25 : 0))))}%`,
                              height: 20,
                              backgroundColor: strength === 'Too Weak' ? 'red' :
                                      (strength === 'Weak' ? 'orange' :
                                      (strength === 'Moderate' ? 'yellow' :
                                      (strength === 'Strong' ? 'green' : 'limegreen')))}}>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Heading: {
        marginTop: 40,
        padding: 40,
    },
    strengthText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#007700',
    },
    suggestionsText: {
        color: 'red',
    },
    strengthMeter: {
        width: '80%',
        height: 20,
        backgroundColor: '#ccc',
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
});
export default PasswordStrengthCheckerApp;