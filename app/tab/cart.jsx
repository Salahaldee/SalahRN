import { ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Modal, TextInput, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import StoreContext from '@/Store/StoreContext';
import Cardcart from '../../components/CardCart';

const cart = () => {
    const { cart, setCart, isNightMode } = useContext(StoreContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [deliveryModalVisible, setDeliveryModalVisible] = useState(false); // New state for delivery options
    const [cardNumber, setCardNumber] = useState('');
    const [visaNumber, setVisaNumber] = useState("");
    const [cvc, setCvc] = useState("");
    const [productAdded, setProductAdded] = useState(false);
    const [deliveryMethod, setDeliveryMethod] = useState(null); // New state for delivery method
    const [address, setAddress] = useState(""); // New state for delivery address
    const [deliveryCost, setDeliveryCost] = useState(0); // New state for delivery cost

    const handleVisaNumber = (text) => {
        if (text.length <= 16) {
            setVisaNumber(text);
        }
    };

    const handleCvc = (text) => {
        if (text.length <= 3) {
            setCvc(text);
        }
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalWithDelivery = totalPrice + deliveryCost; // Calculate total with delivery cost

    const addItemToCart = (item) => {
        setCart([...cart, item]);
        setProductAdded(true);
    };

    const deleteItem = (name) => {
        setCart(cart.filter((item) => item.name !== name));
        setProductAdded(cart.length > 0);
    };

    const clearCart = () => {
        setCart([]);
        setProductAdded(false);
    };

    useEffect(() => {
        setProductAdded(cart.length > 0);
    }, [cart]);

    const handleOrder = () => {
        setDeliveryModalVisible(true); // Show delivery options first
    };

    const handleDeliverySelection = (method) => {
        setDeliveryMethod(method);
        if (method === 'delivery') {
            // If delivery is selected, set delivery cost to 10 shekels
            setDeliveryCost(10);
            // Show an input for the address
            Alert.prompt(
                'Enter Delivery Address',
                'Please enter your delivery address:',
                [
                    {
                        text: 'Cancel',
                        onPress: () => {
                            setDeliveryModalVisible(false); // Close delivery modal if canceled
                        },
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: (address) => {
                            setAddress(address);
                            setDeliveryModalVisible(false); // Close delivery modal
                            setModalVisible(true); // Open payment modal
                        },
                    },
                ],
                'plain-text'
            );
            // } else {
            // If pickup is selected, set delivery cost to 0
        }
        setDeliveryCost(0);
        setDeliveryModalVisible(false); // Close delivery modal
        setModalVisible(true); // Open payment modal
    };

    const handleCashPayment = () => {
        Alert.alert('Payment Successful', 'تم الدفع النقدي. ✅');
        // Alert.alert('Delivery Confirmed', 'تم التوصيل ✅'); // Show delivery confirmation
        clearCart();
        setModalVisible(false);
    };

    const handleCardPayment = () => {
        if (visaNumber.length < 16 || cvc.length < 3) {
            Alert.alert('Error', 'Invalid card number or CVC');
            return;
        }
        Alert.alert('Payment Successful', 'تم الدفع عن طريق الفيزا ✅');
        // Alert.alert('Delivery Confirmed', 'تم التوصيل ✅'); // Show delivery confirmation
        clearCart();
        setModalVisible(false);
    };

    const styles = getStyles(isNightMode);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {cart.length > 0 ? (
                    <>
                        {cart.map((item, index) => (
                            <Cardcart {...item} key={index} index={index} deleteItem={deleteItem} />
                        ))}
                        <View style={styles.cartSummary}>
                            <Text style={styles.totalPriceText}>Total: {totalPrice}₪</Text>
                            {deliveryCost > 0 && (
                                <Text style={styles.deliveryCostText}>Delivery Cost: {deliveryCost}₪</Text>
                            )}
                            <Text style={styles.totalWithDeliveryText}>Total with Delivery: {totalWithDelivery}₪</Text>
                            <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
                                <Text style={styles.clearButtonText}>Clear Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.checkoutButton} onPress={handleOrder}>
                                <Text style={styles.checkoutButtonText}>Order</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View style={styles.emptyCartContainer}>
                        <Text style={styles.emptyCartText}>Your cart is empty 🛒</Text>
                    </View>
                )}

                {productAdded ? (
                    <Text style={styles.cartStatusText}>You have added items to your cart. 🛒</Text>
                ) : (
                    <Text style={styles.cartStatusText1}>You have not added any items to your cart. Please add products to your cart! 🛍️</Text>
                )}
            </ScrollView>

            {/* Delivery Options Modal */}
            <Modal visible={deliveryModalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Choose Delivery Method</Text>
                        <TouchableOpacity style={styles.paymentButton} onPress={() => handleDeliverySelection('delivery')}>
                            <Text style={styles.paymentButtonText}>Delivery🏍️ (+10₪)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.paymentButton} onPress={() => handleDeliverySelection('pickup')}>
                            <Text style={styles.paymentButtonText}>Pickup🚶🏻‍➡️ (Free)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setDeliveryModalVisible(false)}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Payment Modal */}
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Choose Payment Method</Text>
                        <Text style={styles.confirmationText}>
                            Delivery Method: {deliveryMethod === 'delivery' ? `Delivery to: ${address}` : 'Pickup'}
                        </Text>
                        {deliveryMethod === 'delivery' && (
                            <Text style={styles.confirmationText}>Delivery Cost: 10₪</Text>
                        )}
                        <Text style={styles.confirmationText}>Total: {deliveryMethod === 'delivery' ?
                            (totalWithDelivery + 10) :
                            totalWithDelivery}
                            ₪</Text>
                        <TouchableOpacity style={styles.paymentButton} onPress={handleCashPayment}>
                            <Text style={styles.paymentButtonText}>Pay with Cash</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.paymentButton} onPress={handleCardPayment}>
                            <Text style={styles.paymentButtonText}>Pay with Visa</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.cardInput}
                            placeholder="Enter Card Number"
                            keyboardType="numeric"
                            value={visaNumber}
                            onChangeText={handleVisaNumber}
                            maxLength={16}
                        />
                        <TextInput
                            style={styles.cardInput}
                            placeholder="Enter CVC"
                            keyboardType="numeric"
                            value={cvc}
                            onChangeText={handleCvc}
                            maxLength={3}
                        />
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default cart;

const getStyles = (isNightMode) =>
    StyleSheet.create({
        container: { flex: 1, backgroundColor: isNightMode ? '#1E1E1E' : '#FFFFFF', paddingTop: 20 },
        scrollView: { paddingBottom: 20 },
        cartSummary: { marginTop: 20, padding: 15, backgroundColor: isNightMode ? '#333' : '#f8f8f8', borderRadius: 10, marginHorizontal: 20, alignItems: 'center' },
        totalPriceText: { fontSize: 24, fontWeight: 'bold', color: isNightMode ? '#FFD700' : '#333' },
        deliveryCostText: { fontSize: 18, color: isNightMode ? '#FFD700' : '#666', marginTop: 10 },
        totalWithDeliveryText: { fontSize: 24, fontWeight: 'bold', color: isNightMode ? '#FFD700' : '#333', marginTop: 10 },
        clearButton: { marginTop: 15, backgroundColor: '#FF6347', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 25, alignItems: 'center' },
        clearButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
        checkoutButton: { marginTop: 15, backgroundColor: '#32CD32', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 25, alignItems: 'center' },
        checkoutButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
        emptyCartContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
        emptyCartText: { fontSize: 20, color: isNightMode ? '#FFD700' : '#666', textAlign: 'center' },
        modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
        modalContent: { width: 300, padding: 20, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center' },
        modalTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
        paymentButton: { backgroundColor: '#FFD700', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 25, marginVertical: 10 },
        paymentButtonText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
        cardInput: { borderBottomWidth: 1, width: '100%', padding: 10, marginBottom: 20, fontSize: 16 },
        cancelText: { color: '#FF6347', marginTop: 10, fontSize: 16 },
        cartStatusText: { fontSize: 18, fontWeight: 'bold', color: '#00FF00', textAlign: 'center', marginTop: 20 },
        cartStatusText1: { fontSize: 18, fontWeight: 'bold', color: '#FF6347', textAlign: 'center', marginTop: 20 },
        confirmationText: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
    });