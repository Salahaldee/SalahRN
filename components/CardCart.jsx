import { ActivityIndicator, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import StoreContext from '@/Store/StoreContext';
import { Ionicons } from '@expo/vector-icons';
import index from './../app/index';

const CardCart = (item) => {
    const { cart, setCart } = useContext(StoreContext);
    const [quantity, setQuantity] = useState(item.quantity);
    const [loading, setLoading] = useState(false);
    const { isNightMode, setIsNightMode } = useContext(StoreContext)
    console.log(item);

    const sleep = () => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }

    const update = (newQuantity) => {
        setTimeout(() => {
            cart[item.index].quantity = newQuantity;
            setCart([...cart]);
            setLoading(false)
        }, 50);
    }

    const updateQuantity = (type) => {
        let newQuantity = quantity;
        if (type === 'increase') {
            newQuantity += 1;
        } else if (type === 'decrease' && quantity > 1) {
            newQuantity -= 1;
        }
        setQuantity(newQuantity);
        setLoading(true)
        update(newQuantity)
    };

    const deleteItem = () => {
        //.splice(index, 1)
        console.log("index", item.index);

        console.log("test", cart.length);
        cart.splice(item.index, 1)
        console.log("test", cart.length);

        setCart([...cart]);
    };

    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={styles.infoContainer}>
                <Text style={styles.itemName}>{item?.name}</Text>
                {/* <Text style={styles.price}>${item.price.toFixed(2)}</Text> */}
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => updateQuantity('decrease')} style={styles.quantityButton}>
                        <Ionicons name="remove" size={20} color="white" />
                    </TouchableOpacity>
                    {
                        loading ?
                            <ActivityIndicator /> :
                            <Text style={styles.quantityText}>{quantity}</Text>
                    }
                    <TouchableOpacity onPress={() => updateQuantity('increase')} style={styles.quantityButton}>
                        <Ionicons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.price}>{item?.price * quantity}₪</Text>
            <TouchableOpacity onPress={deleteItem} style={styles.deleteButton}>
                <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );
};

export default CardCart;

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    price: {
        fontSize: 23,
        color: 'black',
        marginVertical: 5,
        marginRight: 15,
        marginTop: 30
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    quantityButton: {
        backgroundColor: '#007BFF',
        padding: 5,
        borderRadius: 5,
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    deleteButton: {
        marginLeft: 10,
    },
});
