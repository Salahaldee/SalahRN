import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from 'expo-router';
import StoreContext from '@/Store/StoreContext';

const Product = (props) => {
    const { isNightMode } = useContext(StoreContext);
    const nav = useNavigation();
    const styles = getStyles(isNightMode); // Dynamically get styles

    return (
        <TouchableOpacity
            onPress={() => nav.navigate('screen2', { ...props })}
            style={styles.productContainer}
        >
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.details}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.size}>Size: {props.size}</Text>
                    <Text style={styles.price}>{props.price}₪</Text>
                </ScrollView>
            </View>
        </TouchableOpacity>
    );
};

export default Product;

const getStyles = (isNightMode) =>
    StyleSheet.create({
        productContainer: {
            flexDirection: 'row',
            backgroundColor: isNightMode ? '#1E1E1E' : '#F8F8F8',
            borderWidth: 1,
            borderColor: isNightMode ? '#333' : '#CCC',
            marginVertical: 10,
            marginHorizontal: 20,
            borderRadius: 15,
            padding: 15,
            elevation: 3,
            flexWrap: 'wrap',
        },
        image: {
            width: 120,
            height: 120,
            borderRadius: 10,
            marginRight: 15,
            backgroundColor: "#C4C4C4",
        },
        details: {
            flex: 1,
            justifyContent: 'space-between',
        },
        scrollContent: {
            paddingRight: 10,
        },
        name: {
            color: isNightMode ? '#FFD700' : '#222',
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 5,
            textTransform: 'capitalize',
        },
        size: {
            color: isNightMode ? '#A9A9A9' : '#555',
            fontSize: 18,
        },
        price: {
            color: isNightMode ? 'white' : '#222',
            fontSize: 20,
            backgroundColor: '#FFD700',
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            textAlign: 'center',
            width: 80,
        },
    });
