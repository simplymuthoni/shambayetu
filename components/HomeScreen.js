import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('../assets/logo1.png')} style={styles.logo} />
        <Text style={styles.title}>ShambaYetu</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Image source={require('../assets/cart.png')} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here"
          placeholderTextColor="#A5A5A5"
        />
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="#A5A5A5" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Text style={styles.categoryTitle}>Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        <View style={styles.category}>
          <Image source={require('../assets/veggies_icon.png')} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>Vegetables</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../assets/eggs.png')} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>Eggs</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../assets/milk.jpg')} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>Milk</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../assets/meat1.jpg')} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>Meat</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../assets/cereals.jpg')} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>Cereals</Text>
        </View>
      </ScrollView>

      {/* Products Grid */}
      <View style={styles.productsContainer}>
        <View style={styles.productCard}>
          <Image source={require('../assets/Spinach.png')} style={styles.productImage} />
          <Text style={styles.productName}>Spinach</Text>
          <Text style={styles.productPrice}>Ksh.120</Text>
        </View>
        <View style={styles.productCard}>
          <Image source={require('../assets/eggs.jpeg')} style={styles.productImage} />
          <Text style={styles.productName}>Eggs</Text>
          <Text style={styles.productPrice}>Ksh.300</Text>
        </View>
        <View style={styles.productCard}>
          <Image source={require('../assets/milk1.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Milk</Text>
          <Text style={styles.productPrice}>Ksh.140</Text>
        </View>
        <View style={styles.productCard}>
          <Image source={require('../assets/beef.jpeg')} style={styles.productImage} />
          <Text style={styles.productName}>Beef</Text>
          <Text style={styles.productPrice}>Ksh.500</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DB61D',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartButton: {
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  categoryTitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
  },
  categoryScroll: {
    marginTop: 10,
    marginBottom: 20,
  },
  category: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryText: {
    marginTop: 5,
    color: '#fff',
    fontSize: 14,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: width * 0.4,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7DB61D',
  },
  productPrice: {
    fontSize: 14,
    color: '#7DB61D',
    marginTop: 5,
  },
});

export default HomeScreen;
