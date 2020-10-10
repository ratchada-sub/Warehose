import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Home({ navigation }) {
  const image = {uri: '../../assets/wh1.jpg'};

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/wh1.jpg')}
        style={styles.Image}>
        <View style={styles.brand}>
          <View style={styles.brandTextView}>
            <Text style={styles.brandText}>Warehouse</Text>
          </View>
        </View>
        <View style={styles.Button}>
          <View>
            <TouchableOpacity style={styles.ButtonSignUp}
             onPress={() => navigation.navigate('Register')}>
              <Text style={styles.TextSignUp}> Sign Up</Text>
            </TouchableOpacity>
          </View>
          
          <View>
            <TouchableOpacity
              style={styles.ButtonLogin}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.TextLogin}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    flex: 1,
    resizeMode: 'cover',
  },

  brand: {
    height: '80%',
    paddingTop: '10%',
  },
  brandTextView: {
    height: '30%',
    backgroundColor: '#F50A0A',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  brandText: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  Button: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 100,
    margin: 5,
  },
  ButtonLogin: {
    marginBottom: 5,
    backgroundColor: '#822D2D',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  ButtonSignUp: {
    marginBottom: 5,

    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  TextLogin: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  TextSignUp: {
    color: '#F50A0A',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Home;
