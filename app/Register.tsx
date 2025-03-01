import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from 'expo-router';
import { createUser } from '@/constants/API';
import StoreContext from '@/Store/StoreContext';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {
    const { isNightMode } = useContext(StoreContext); // Get night mode state
    const [userName, setUserName] = useState('');
    const [passwsord, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigation = useNavigation();

    const validateInputs = () => {
        if (!userName || !passwsord || !phone) {
            Alert.alert('Missing Information', 'Please enter all fields.');
            return false;
        }
        return true;
    };

    const RegisterApi = async () => {
        if (!validateInputs()) return;

        try {
            const res = await createUser({ userName, passwsord, phone });
            console.log(res);

            if (res.success) {
                navigation.navigate('tab');
            } else {
                Alert.alert('Error', `Username or phone number is invalid.`);//\n ${res.message}
            }
        } catch (error) {
            Alert.alert('Registration Failed', 'Please try again later.');
        }
    };

    const styles = getStyles(isNightMode); // Get dynamic styles

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
                <Text style={styles.title}>Register</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        placeholder="Username"
                        value={userName}
                        onChangeText={setUserName}
                        style={styles.input}
                        placeholderTextColor={isNightMode ? "#AAA" : "#666"}
                    />

                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder="Password"
                        value={passwsord}
                        onChangeText={setPassword}
                        style={styles.input}
                        secureTextEntry
                        placeholderTextColor={isNightMode ? "#AAA" : "#666"}
                    />

                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        value={phone}
                        keyboardType="phone-pad"
                        placeholder="Phone Number"
                        onChangeText={setPhone}
                        placeholderTextColor={isNightMode ? "#AAA" : "#666"}
                    />

                    <TouchableOpacity onPress={RegisterApi} style={styles.registerButton}>
                        <Text style={styles.registerButtonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Ionicons name="chevron-back-outline" size={45} color={isNightMode ? "#FFF" : "#000"} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Register;

// Dynamic styles for Night Mode
const getStyles = (isNightMode) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isNightMode ? '#1E1E1E' : '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        scrollView: {
            flexGrow: 1,
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
        },
        title: {
            fontSize: 30,
            color: isNightMode ? '#FFD700' : '#000000',
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 20,
        },
        inputContainer: {
            width: '80%',
            alignItems: 'center',
        },
        label: {
            fontSize: 20,
            color: isNightMode ? '#FFF' : '#000000',
            textDecorationLine: 'underline',
            marginTop: 10,
            marginBottom: 7,
        },
        input: {
            width: '100%',
            padding: 15,
            borderWidth: 2,
            borderColor: '#FFD700',
            borderRadius: 30,
            backgroundColor: isNightMode ? '#333' : '#FFFFFF',
            fontSize: 16,
            marginBottom: 20,
            color: isNightMode ? '#FFF' : '#000000',
        },
        registerButton: {
            backgroundColor: '#FFD700',
            paddingVertical: 15,
            paddingHorizontal: 50,
            borderRadius: 30,
            marginTop: 20,
            width: '100%',
            alignItems: 'center',
        },
        registerButtonText: {
            fontSize: 20,
            color: '#000000',
            fontWeight: 'bold',
        },
    });
