import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';

const Poduct = (props) => {
    const nav = useNavigation();

    return (
        <TouchableOpacity onPress={() => nav.navigate('screen2', { ...props })} style={styles.productContainer}>
            {/* <View style={styles.image}>
            </View> */}
                <Image style={styles.image} source={{uri:props.image}}/>
            <View style={styles.details}>
                <ScrollView>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.size}>Size: {props.size}</Text>
                    <Text style={styles.price}>{props.price}₪</Text>
                </ScrollView>
            </View>
        </TouchableOpacity>
    );
};

export default Poduct;

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        backgroundColor: "#FFFAFA",

        borderWidth: 1,
        margin: 10,
        borderRadius: 20,
        padding: 10,
    },
    image: {
        width: '40%',
        height: 120,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: "#4545",
        borderRadius: 10,
    },
    details: {
        flex: 1,
    },
    name: {
        color: "#000000",
        fontSize: 25,
        marginTop: 20,
    },
    size: {
        color: '#FFD700',
        fontSize: 20,
        marginRight: 'auto',
    },
    price: {
        color: 'black',
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 2,
        width: 60,
        textAlign: 'center',
        marginRight: 'auto',
    },
});
