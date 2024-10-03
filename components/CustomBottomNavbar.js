import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const CustomBottomNavbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
    
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.iconWrapper}>
        <Image source={require('../assets/cart.png')} style={styles.icon} />
        <Text style={styles.navText}>Cart</Text> {/* Correct */}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.centerIconWrapper}>
        <View style={styles.centerIcon}>
          <Image source={require('../assets/leaf-icon.png')} style={styles.icon} />
          <Text style={styles.navText}>Home</Text> {/*correct */}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconWrapper}>
        <Image source={require('../assets/user.png')} style={styles.icon} />
        <Text style={styles.navText}>Profile</Text> {/* correct */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    height: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  iconWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  centerIconWrapper: {
    position: 'absolute',
    top: -30, // To make the central icon stand out
    alignSelf: 'center',
  },
  centerIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CAF50', // Green color for the central icon
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#4CAF50', // Ensures the icons match the green color palette
  },
});

export default CustomBottomNavbar;
