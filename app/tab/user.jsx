import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from 'expo-router';
import StoreContext from './../../Store/StoreContext';

const User = () => {
    const navigation = useNavigation();
    const { user, isNightMode } = useContext(StoreContext); // Get user & Night Mode state
    const styles = getStyles(isNightMode); // Generate styles dynamically

    return (
        <View style={styles.container}>
            {/* User Name Display */}
            <Text style={styles.userName}>{user?.userName || "User"}</Text>

            {/* Login Button */}
            <View style={styles.buttonContainer}>
                <Text style={styles.label}>Go to Login</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            {/* Register Button */}
            <View style={styles.buttonContainer}>
                <Text style={styles.label}>Go to Register</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default User;

// Dynamic styling for Night Mode
const getStyles = (isNightMode) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isNightMode ? "#1E1E1E" : "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
        },
        userName: {
            backgroundColor: "#FFD700",
            width: 200,
            height: 60,
            borderRadius: 50,
            fontSize: 30,
            textAlign: "center",
            textAlignVertical: "center",
            fontWeight: "bold",
            borderWidth: 2,
            borderColor: isNightMode ? "#222" : "#FFFFFF",
            color: isNightMode ? "#000000" : "#000000",
            marginBottom: 90,
        },
        buttonContainer: {
            marginBottom: 30,
            alignItems: "center",
        },
        label: {
            fontSize: 22,
            color: isNightMode ? "#FFD700" : "#000000",
            marginBottom: 10,
            fontWeight: "bold",
        },
        button: {
            backgroundColor: "#FFD700",
            width: 180,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
            borderColor: isNightMode ? "#222" : "#FFFFFF",
        },
        buttonText: {
            fontSize: 22,
            fontWeight: "bold",
            color: "#000000",
        },
    });
