import { Alert, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from 'expo-router';
import { login } from './../constants/API';
import StoreContext from '@/Store/StoreContext';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
    const { setUser, isNightMode } = useContext(StoreContext); // Combined useContext
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigation();

    const pressRegister = () => navigate.navigate('Register');

    const loginApi = async () => {
        if (!phone || !password) {
            Alert.alert("Missing Information", "Please enter both phone number and password.");
            return;
        }

        try {
            const res = await login({ phone, password });
            if (res?.data) {
                setUser(res.data);
                navigate.navigate('tab');
            } else {
                Alert.alert("Login Failed", "Invalid phone number or password.");
            }
        } catch (error) {
            Alert.alert("Error", "An error occurred. Please try again.");
        }
    };

    const styles = getStyles(isNightMode); // Get dynamic styles

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
                <Text style={styles.title}>Login</Text>

                <TextInput
                    style={styles.input}
                    value={phone}
                    keyboardType="phone-pad"
                    placeholder="Phone Number"
                    onChangeText={setPhone}
                    placeholderTextColor={isNightMode ? "#AAA" : "#666"}
                />

                <TextInput
                    value={password}
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholderTextColor={isNightMode ? "#AAA" : "#666"}
                />

                <TouchableOpacity onPress={loginApi} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={pressRegister}>
                    <Text style={styles.registerLink}>Don't have an account? Register</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate.navigate('tab')}>
                    <Text style={styles.skipLink}>Skip to Menu</Text>
                </TouchableOpacity>
                
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;

// Dynamic styles for Night Mode
const getStyles = (isNightMode) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isNightMode ? '#1E1E1E' : '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
        },
        scrollView: {
            flexGrow: 1,
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
        },
        title: {
            fontSize: 40,
            fontWeight: 'bold',
            color: isNightMode ? '#FFD700' : '#000000',
            marginBottom: 30,
        },
        input: {
            width: '80%',
            padding: 15,
            fontSize: 18,
            marginVertical: 10,
            backgroundColor: isNightMode ? '#333' : '#FFFFFF',
            borderRadius: 8,
            color: isNightMode ? '#FFF' : '#000',
            borderWidth: 1,
            borderColor: isNightMode ? '#FFD700' : '#444',
        },
        loginButton: {
            backgroundColor: '#FFD700',
            width: '80%',
            padding: 15,
            alignItems: 'center',
            borderRadius: 8,
            marginTop: 20,
            elevation: 3,
        },
        loginButtonText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#1E1E1E',
        },
        registerLink: {
            color: isNightMode ? '#FFD700' : '#000000',
            fontSize: 16,
            marginTop: 15,
            textDecorationLine: 'underline',
        },
        skipLink: {
            color: isNightMode ? '#FFD700' : '#000000',
            fontSize: 16,
            marginTop: 10,
            textDecorationLine: 'underline',
        },
    });
