import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const data = [
  { id: '1', image: require('../assets/meat.png'), caption: 'Meat and meat products' },
  { id: '2', image: require('../assets/milk.png'), caption: 'Eggs and Dairy Products' },
  { id: '3', image: require('../assets/veggies.png'), caption: 'Green Veggies' },
  { id: '4', image: require('../assets/cereals.png'), caption: 'Cereals' },
  { id: '5', image: require('../assets/mkulima4.png'), caption: 'Local Farmer' },
  { id: '6', image: require('../assets/mkulima3.png'), caption: 'Local Farmer' },
  { id: '7', image: require('../assets/mkulima1.png'), caption: 'Local Farmer' }
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
      <Text style={styles.carouselCaption}>{item.caption}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../assets/b1.png')} // Background image
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../assets/logo1.png')} style={styles.logo} />
          <Text style={styles.headerText}>ShambaYetu</Text>
          <TouchableOpacity style={styles.cartIcon}>
            <Image source={require('../assets/cart.png')} style={styles.cartImage} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Image source={require('../assets/search.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search here"
            placeholderTextColor="#000"
          />
        </View>

        {/* Carousel 1 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Buy Products straight from the farmer:</Text>
          <Carousel
            data={data.slice(0, 4)} // First 4 items
            renderItem={renderItem}
            sliderWidth={350}
            itemWidth={300}
            loop={true}
            layout={'default'}
          />
        </View>

        {/* Carousel 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Communicate and rate your supplier:</Text>
          <Carousel
            data={data.slice(4)} // Remaining items
            renderItem={renderItem}
            sliderWidth={350}
            itemWidth={300}
            loop={true}
            layout={'default'}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Image source={require('../assets/menu.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/home.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/user.png')} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  cartIcon: {
    paddingRight: 10,
  },
  cartImage: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  carouselCaption: {
    marginTop: 5,
    color: 'white',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
});

export default HomeScreen;
