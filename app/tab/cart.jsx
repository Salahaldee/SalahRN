import { ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React, { useContext, useEffect } from 'react';
import StoreContext from '@/Store/StoreContext';
import CardCart from '../../components/CardCart';

const Cart = () => {
    const { cart, setCart, isNightMode } = useContext(StoreContext); // Combined context

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const deleteItem = (name) => {
        setCart(cart.filter((item) => item.name !== name));
    };

    const clearCart = () => {
        setCart([]);
    };

    useEffect(() => {
        console.log('Cart updated:', cart);
    }, [cart]);

    const styles = getStyles(isNightMode); // Get dynamic styles

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {cart.length > 0 ? (
                    <>
                        {cart.map((item, index) => (
                            <CardCart {...item} key={index} index={index} deleteItem={deleteItem} />
                        ))}
                        <View style={styles.cartSummary}>
                            <Text style={styles.totalPriceText}>Total: {totalPrice}₪</Text>
                            <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
                                <Text style={styles.clearButtonText}>Clear Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View style={styles.emptyCartContainer}>
                        <Text style={styles.emptyCartText}>Your cart is empty 🛒</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Cart;

// Dynamic styling for Night Mode
const getStyles = (isNightMode) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isNightMode ? '#1E1E1E' : '#FFFFFF',
            paddingTop: 20,
        },
        scrollView: {
            paddingBottom: 20,
        },
        cartSummary: {
            marginTop: 20,
            padding: 15,
            backgroundColor: isNightMode ? '#333' : '#f8f8f8',
            borderRadius: 10,
            marginHorizontal: 20,
            alignItems: 'center',
        },
        totalPriceText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: isNightMode ? '#FFD700' : '#333',
        },
        clearButton: {
            marginTop: 15,
            backgroundColor: '#FF6347',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 25,
            alignItems: 'center',
        },
        clearButtonText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
        },
        emptyCartContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
        },
        emptyCartText: {
            fontSize: 20,
            color: isNightMode ? '#FFD700' : '#666',
            textAlign: 'center',
        },
    });
