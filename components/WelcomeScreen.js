import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';

// Get the screen dimensions
const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/b1.png')} // Background image
      style={styles.background}
      imageStyle={{ resizeMode: 'cover' }} // Ensure the image covers the entire screen
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.titleText}>ShambaYetu</Text>
        <Image source={require('../assets/logo1.png')} style={styles.logo} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width, // Full screen width
    height: height, // Full screen height
    justifyContent: 'center', // Centers the content vertically
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better contrast with the text
  },
  welcomeText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
