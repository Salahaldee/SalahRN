import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';; // استخدم useNavigation من @react-navigation/native
// import AsyncStorage from '@react-native-async-storage/async-storage'; // استيراد AsyncStorage
import StoreContext from './../../Store/StoreContext';
import { FontAwesome } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';

const User = () => {
    const navigation = useNavigation();
    const { user, isNightMode, setUser } = useContext(StoreContext); // تأكد من وجود setUser في StoreContext
    const styles = getStyles(isNightMode);

    const logout = async () => {
        try {
            // await AsyncStorage.removeItem('user'); // إزالة بيانات المستخدم من AsyncStorage
            setUser(null); // تحديث حالة المستخدم إلى null
            router.navigate("/login"); // توجيه المستخدم إلى شاشة تسجيل الدخول
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <View style={styles.container}>
            {/* User Name Display */}
            <View>
                <FontAwesome style={{ alignSelf: 'center' }} name="user-circle" size={100} color="#7FFFD4" marginBottom="33" />
                <TouchableOpacity>
                    <Text style={styles.userName}>{user?.userName || "User"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={logout} style={styles.logoutButton}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View>
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
            justifyContent: "space-between",
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
            marginBottom: 10,
        },
        buttonContainer: {
            marginBottom: 90,
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
        logoutButton: {
            backgroundColor: '#FF4C4C',
            width: '45%',
            padding: 15,
            alignItems: 'center',
            borderRadius: 8,
            alignSelf: 'center',
            elevation: 3,
            marginVertical: 20
        },
        logoutButtonText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#FFF',
        },
    });