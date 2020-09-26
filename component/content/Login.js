import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee,faUser,faUnlock} from '@fortawesome/free-solid-svg-icons';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  ImageBackground,
  Button,
  TouchableOpacity,
  SectionList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Login({navigation}) {
  const image = {uri: '../../assets/wh2.jpg'};

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/wh2.jpg')}
        style={styles.Image}>
        <View style={styles.Button}>
          <View style={{margin: 5}}>
            <View style={styles.searchSection}>
              <FontAwesomeIcon
                icon={faUser}
                style={styles.searchIcon}
                name="ios-search"
                color="#000"
              />
              <TextInput style={styles.Textusername} placeholder="Username" />
            </View>
          </View>
          <View style={{margin: 5}}>
            <View style={styles.searchSection}>
              <FontAwesomeIcon
                icon={faUnlock}
                style={styles.searchIcon}
                name="ios-search"
                color="#000"
              />
              <TextInput style={styles.Textusername}  placeholder="Password" secureTextEntry={true} />
            </View>
          </View>
          <View>
            <View style={{margin: 5, marginTop: 20}}>
              <TouchableOpacity
                style={styles.ButtonSignUp}
                onPress={() => navigation.navigate('Customer')}>
                <Text style={styles.TextSignUp}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View></View>
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

  brandText: {
    color: '#822D2D',
    fontSize: 50,
    fontWeight: 'bold',
  },
  Button: {
    paddingLeft: 20 /*ใช้แบ่งแยกช่องว่างระหว่าง element จาก “ข้างใน”*/,
    paddingRight: 20,
    height: 100,
    margin: 5,
    marginTop: 20,
    flex: 1,
    paddingTop: 20,
  },

  ButtonSignUp: {
    marginBottom: 5 /*จะใช้แบ่งแยกช่องว่างระหว่าง element ของเราจาก “ข้างนอก”*/,
    backgroundColor: '#822D2D',
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
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Textusername: {
    height: 50,
    borderColor: '#ffffff',
    borderWidth: 1,
    flex: 1,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#ffffff',
  },
  searchIcon: {
    padding: 15,
    margin: 10,
  },
  TextIcon: {},
});
export default Login;
