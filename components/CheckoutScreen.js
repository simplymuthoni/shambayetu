import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // If using Expo, else use `react-native-vector-icons/Ionicons`

const PaymentScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Handle when Pay button is pressed
  const handlePayment = () => {
    if (selectedMethod) {
      alert(`${selectedMethod} Payment Selected! Proceeding to payment gateway...`);
      // Navigate to a specific payment gateway or order confirmation screen
      navigation.navigate('OrderConfirmation', { paymentMethod: selectedMethod });
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ShambaYetu Pay</Text>

      <ScrollView style={styles.paymentOptions}>
        <TouchableOpacity 
          style={styles.paymentOption} 
          onPress={() => setSelectedMethod('Balance')}
        >
          <View style={styles.paymentIcon}>
            <Ionicons name="wallet" size={24} color="black" />
          </View>
          <View style={styles.paymentDetails}>
            <Text style={styles.paymentMethodName}>Your Balance</Text>
            <Text style={styles.paymentMethodAmount}>₦1,298.07</Text>
          </View>
          {selectedMethod === 'Balance' && <Ionicons name="checkmark-circle" size={24} color="green" />}
        </TouchableOpacity>

        <Text style={styles.sectionHeading}>Debit/Credit Card</Text>

        <TouchableOpacity 
          style={styles.paymentOption} 
          onPress={() => setSelectedMethod('Visa')}
        >
          <Image style={styles.cardIcon} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' }} />
          <View style={styles.paymentDetails}>
            <Text style={styles.paymentMethodName}>Visa</Text>
            <Text style={styles.cardNumber}>**** **** **** 1234</Text>
          </View>
          {selectedMethod === 'Visa' && <Ionicons name="checkmark-circle" size={24} color="green" />}
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.paymentOption} 
          onPress={() => setSelectedMethod('Mastercard')}
        >
          <Image style={styles.cardIcon} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg' }} />
          <View style={styles.paymentDetails}>
            <Text style={styles.paymentMethodName}>Mastercard</Text>
            <Text style={styles.cardNumber}>**** **** **** 1234</Text>
          </View>
          {selectedMethod === 'Mastercard' && <Ionicons name="checkmark-circle" size={24} color="green" />}
        </TouchableOpacity>


        {/* M-Pesa Payment */}
        <Text style={styles.sectionHeading}>Mobile Payments</Text>
        <TouchableOpacity 
          style={styles.paymentOption} 
          onPress={() => setSelectedMethod('M-Pesa')}
        >
          <Image style={styles.cardIcon} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/29/M-PESA_LOGO-01.svg' }} />
          <Text style={styles.paymentMethodName}>M-Pesa</Text>
          {selectedMethod === 'M-Pesa' && <Ionicons name="checkmark-circle" size={24} color="green" />}
        </TouchableOpacity>

        {/* PayPal Payment */}
        <TouchableOpacity 
          style={styles.paymentOption} 
          onPress={() => setSelectedMethod('PayPal')}
        >
          <Image style={styles.cardIcon} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' }} />
          <Text style={styles.paymentMethodName}>PayPal</Text>
          {selectedMethod === 'PayPal' && <Ionicons name="checkmark-circle" size={24} color="green" />}
        </TouchableOpacity>

      </ScrollView>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentOptions: {
    flex: 1,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  paymentIcon: {
    marginRight: 10,
  },
  paymentDetails: {
    flex: 1,
  },
  paymentMethodName: {
    fontSize: 18,
  },
  paymentMethodAmount: {
    color: '#555',
  },
  cardIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  cardNumber: {
    fontSize: 14,
    color: '#777',
  },
  sectionHeading: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
