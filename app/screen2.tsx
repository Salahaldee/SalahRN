import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams, useNavigation } from 'expo-router';
import StoreContext from '@/Store/StoreContext';

const Screen2 = () => {
    const params = useLocalSearchParams();
    const navigation = useNavigation();
    const { cart, setCart, isNightMode } = useContext(StoreContext); // Combined context
    const [quantity, setQuantity] = useState(1);
    const { name, price, size, image } = params;

    const slideAnim = useRef(new Animated.Value(0)).current; // Slide animation reference

    const addToCart = () => {
        setCart([...cart, { name, price, size, quantity, image }]);
    };

    useEffect(() => {
        // Slide-in animation when the screen is loaded
        Animated.timing(slideAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    const styles = getStyles(isNightMode); // Get styles dynamically

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.header,
                    { transform: [{ translateY: slideAnim.interpolate({ inputRange: [0, 1], outputRange: [-50, 0] }) }] },
                ]}
            >
                <View style={styles.center}>
                    <Text style={styles.productName}>{name}</Text>
                </View>
            </Animated.View>

            <Animated.View style={[styles.center, { opacity: slideAnim }]}>
                <Text style={styles.totalPrice}>{price * quantity}₪</Text>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                        <Text style={styles.actionText}>+</Text>
                    </TouchableOpacity>

                    <Text style={styles.actionText}>{quantity}</Text>

                    <TouchableOpacity onPress={() => quantity > 1 && setQuantity(quantity - 1)}>
                        <Text style={styles.actionText}>-</Text>
                    </TouchableOpacity>
                </View>

                <Link
                    onPress={addToCart}
                    href={{ pathname: '/tab/cart' }}
                    style={styles.addToCartButton1}
                >
                    <Text style={styles.addToCartButton}>Add to Cart</Text>
                </Link>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
                    <Ionicons name="chevron-back-outline" size={45} color={isNightMode ? "#FFF" : "#000"} />
                </TouchableOpacity>             
            </Animated.View>
        </View>
    );
};

export default Screen2;

// Dynamic styling for Night Mode
const getStyles = (isNightMode) =>
    StyleSheet.create({
        container: {
            backgroundColor: isNightMode ? "#1E1E1E" : "#FFFFFF",
            flex: 1,
            paddingHorizontal: 10,
        },
        header: {
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
        },
        center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        productName: {
            fontSize: 30,
            color: isNightMode ? "#FFD700" : "#000000",
            fontWeight: 'bold',
            marginTop: 20,
        },
        totalPrice: {
            fontSize: 40,
            textAlign: 'center',
            marginVertical: 10,
            color: isNightMode ? "#FFD700" : "#000000",
        },
        actionText: {
            fontSize: 40,
            textAlign: 'center',
            marginVertical: 10,
            color: isNightMode ? "#FFD700" : "#000000",
        },
        quantityContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
        },
        addToCartButton: {
            fontSize: 18,
            color: "#000000",
            textAlign: 'center',
            fontWeight: 'bold',
        },
        addToCartButton1: {
            backgroundColor: "#FFD700",
            width: 180,
            height: 50,
            marginTop: 20,
            paddingVertical: 10,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
        },
        iconContainer: {
            marginTop: 20,
            alignSelf: 'center',
        },
    });
