import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams, useNavigation } from 'expo-router';
import StoreContext from '@/Store/StoreContext';

const Screen2 = () => {
    const params = useLocalSearchParams();
    const navigation = useNavigation();
    const { cart, setCart } = useContext(StoreContext);
    const [quantity, setQuantity] = useState(1);
    const { name, price, size,image } = params;

    console.log("image",image);
    

    const addToCart = () => {
        const updatedCart = [...cart, { name, price, size, quantity,image }];
        setCart(updatedCart);
        // navigation.push('./tab/cart');
    };

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    useEffect(() => {
        console.log("Cart length:", cart.length);
    }, [cart]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.center}>
                    <Text style={styles.productName}>{name}</Text>
                </View>
            </View>

            <View style={styles.center}>
                <Text style={styles.totalPrice}>{price * quantity}₪</Text>

                <TouchableOpacity onPress={increaseQuantity}>
                    <Text style={styles.actionText}>+</Text>
                </TouchableOpacity>

                <Text style={styles.actionText}>{quantity}</Text>

                <TouchableOpacity onPress={decreaseQuantity}>
                    <Text style={styles.actionText}>-</Text>
                </TouchableOpacity>

                <Link
                    onPress={addToCart}
                    href={{
                        pathname: '/tab/cart',
                    }}
                    style={styles.addToCartButton1}
                >
                    {/* <TouchableOpacity
                        onPress={addToCart}
                    > */}
                    <Text style={styles.addToCartButton}>Add to Cart</Text>
                    {/* </TouchableOpacity> */}
                </Link>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-forward-outline" size={45} color="#000000" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Screen2;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FDF5E6",
        flex: 1,
        marginTop: 35,
    },
    header: {
        flexDirection: 'row',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    productName: {
        fontSize: 30,
        color: "#00000",
    },
    totalPrice: {
        fontSize: 40,
        textAlign: 'center',
        marginVertical: 3,
        color: "#000000",
    },
    actionText: {
        fontSize: 40,
        textAlign: 'center',
        marginVertical: 3,
        color: "#000000",
        top: 2,
    },
    addToCartButton: {
        color: "black",
        fontSize: 30,
        textAlign:'center',
        margin:50
    },
    addToCartButton1: {
        backgroundColor: "white",
        width: 154,
        marginLeft: 5,
        borderRadius: 18,
        paddingVertical:3
        
    },
    icon: {
        marginLeft: 320,
        marginTop: 190,
    },
});
