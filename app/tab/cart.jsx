import { ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Modal, TextInput, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import StoreContext from '@/Store/StoreContext';
import Cardcart from '../../components/CardCart';

const cart = () => {
    const { cart, setCart, isNightMode } = useContext(StoreContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [visaNumber, setVisaNumber] = useState("");
    const [cvc, setCvc] = useState("");
    const [productAdded, setProductAdded] = useState(false); // State to track if a product is added

    const handleVisaNumber = (text) => {
      if (text.length <= 16) {
      }
    };
  
    const handleCvc = (text) => {
      if (text.length <= 3) {
        setCvc(text);
      }
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Add item to cart
    const addItemToCart = (item) => {
        setCart([...cart, item]);
        setProductAdded(true); // Set productAdded to true when an item is added
    };

    const deleteItem = (name) => {
        setCart(cart.filter((item) => item.name !== name));
        setProductAdded(cart.length > 0); // Reset to false if cart is empty
    };

    const clearCart = () => {
        setCart([]);
        setProductAdded(false); // Reset if cart is cleared
    };

    useEffect(() => {
        setProductAdded(cart.length > 0); // Update the productAdded state when cart changes
    }, [cart]);

    const handleCashPayment = () => {
        Alert.alert('Payment Successful', 'You have successfully paid with cash. ✅');
        clearCart();
        setModalVisible(false);
    };

    const handleCardPayment = () => {
        if (cardNumber.length < 16) {
            Alert.alert('Error', 'Invalid card number and cvc');
            return;
        }
        Alert.alert('Payment Successful', 'Your card payment was processed successfully! ✅');
        clearcart();
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
                            <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
                                <Text style={styles.clearButtonText}>Clear Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.checkoutButton} onPress={() => setModalVisible(true)}>
                                <Text style={styles.checkoutButtonText}>Order</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View style={styles.emptyCartContainer}>
                        <Text style={styles.emptyCartText}>Your cart is empty 🛒</Text>
                    </View>
                )}

                {/* Message when no product is added */}
                {productAdded ? (
                    <Text style={styles.cartStatusText}>You have added items to your cart. 🛒</Text>
                ) : (
                    <Text style={styles.cartStatusText1}>You have not added any items to your cart. Please add products to your cart! 🛍️</Text>
                )}
            </ScrollView>

            {/* Payment Modal */}
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Choose Payment Method </Text>
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
                            maxLength={16} // Ensures max length
                        />
                        <TextInput
                            style={styles.cardInput}
                            placeholder="Enter CVC"
                            keyboardType="numeric"
                            value={cvc}
                            onChangeText={handleCvc}
                            maxLength={3} // Ensures max length
                        />
      <TouchableOpacity
  onPress={() => {
    if (visaNumber.length < 16 || cvc.length < 3) {
      Alert.alert("خطأ", "يرجى إدخال رقم الفيزا وكلمة السر بشكل صحيح ❌");
    } else {
      Alert.alert("تم الدفع", "تم الدفع عن طريق الفيزا ✅");
      clearCart();
      setModalVisible(false);
    }
  }}
>
  <Text style={styles.ss}>ok</Text>
</TouchableOpacity>

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
        cartStatusText1:{fontSize: 18, fontWeight: 'bold', color: '#FF6347', textAlign: 'center', marginTop: 20},
        ss:{fontSize: 18, fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#00FF00', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 25, marginVertical: 10}
        
    });
