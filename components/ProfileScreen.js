import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        {/* <Image 
          source={ require('../assets/logo1.npg')} // Replace with Shamba Yetu profile image URL
          style={styles.profileImage} 
        /> */}
        <Text style={styles.profileName}>Shamba Yetu</Text>
        <Text style={styles.profileRole}>Agriculture Expert</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ProfileDetails')}>
          <MaterialIcons name="person" size={24} color="black" />
          <Text style={styles.menuText}>My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Messages')}>
          <FontAwesome name="envelope" size={24} color="black" />
          <Text style={styles.menuText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Requests')}>
          <Entypo name="share" size={24} color="black" />
          <Text style={styles.menuText}>Requests</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Map')}>
          <Ionicons name="location-sharp" size={24} color="black" />
          <Text style={styles.menuText}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings" size={24} color="black" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Logout')}>
          <Ionicons name="log-out" size={24} color="black" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#7e22ce',
    borderWidth: 3,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileRole: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  menuContainer: {
    width: '80%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#333',
  },
  logoutContainer: {
    marginTop: 30,
    width: '80%',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#7e22ce',
    borderWidth: 1,
  },
  logoutText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#7e22ce',
  },
});

export default ProfileScreen;
