import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const CartScreen = ({ navigation }) => {
  // Sample cart items (replace with real data or props)
  const cartItems = [
    {
      id: '1',
      name: 'Meat',
      image: require('../assets/meat.png'),
      price: 42.95,
      quantity: 1,
    },
    {
      id: '2',
      name: 'Milk',
      image: require('../assets/milk2.png'),
      price: 47.98,
      quantity: 2,
    },
    {
      id: '3',
      name: 'Spinach',
      image: require('../assets/Spinach.png'),
      price: 33.50,
      quantity: 1,
    },
  ];

  // Add Product to Cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Update quantity if product exists
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add new product to cart
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Sample calculations (replace with dynamic values)
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 12.44; // A fixed discount value (can be dynamic)
  const finalTotal = total - discount;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>My Cart</Text>
        <TouchableOpacity onPress={() => console.log('Menu')}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Cart Items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item) => (
          <View style={styles.cartItem} key={item.id}>
            <Image source={item.image} style={styles.cartImage} />
            <View style={styles.cartDetails}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemPrice}>₦{item.price.toFixed(2)}</Text>
              <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Total Calculation */}
      <View style={styles.totalContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Products</Text>
          <Text style={styles.totalPrice}>₦{total.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Discount</Text>
          <Text style={styles.totalPrice}>₦-{discount.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalTextBold}>Total</Text>
          <Text style={styles.totalPriceBold}>₦{finalTotal.toFixed(2)}</Text>
        </View>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.payButtonText}>Pay via Card — ₦{finalTotal.toFixed(2)}</Text>
      </TouchableOpacity>

      {/* Continue Shopping */}
      <Text style={styles.continueShoppingText}>Continue shopping</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    fontSize: 24,
    color: '#000',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  menuIcon: {
    fontSize: 24,
    color: '#000',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cartImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  cartDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    color: '#000',
  },
  cartItemQuantity: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  totalContainer: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalText: {
    fontSize: 16,
    color: '#888',
  },
  totalPrice: {
    fontSize: 16,
    color: '#000',
  },
  totalTextBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalPriceBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  payButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  payButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  continueShoppingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});

export default CartScreen;
