import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProductDetailScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/milk.png')} style={styles.productImage} />
      <Text style={styles.productName}>Cow's Milk</Text>
      <Text style={styles.productDescription}>
        Rich in nutrients and deliciously creamy, our cow's milk is a great addition to any diet.
      </Text>
      <Text style={styles.productPrice}>Price: Ksh.140</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DB61D',
    padding: 20,
    alignItems: 'center',
  },
  productImage: {
    width: width * 0.8,
    height: width * 0.5,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    color: '#7DB61D',
  },
  orderButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    width: width * 0.8,
    alignItems: 'center',
  },
  orderButtonText: {
    fontSize: 20,
    color: '#7DB61D',
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
