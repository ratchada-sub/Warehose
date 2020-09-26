import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faCartPlus,
  faSearch,
  faTimes,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
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

import {TextInput} from 'react-native-gesture-handler';

function Header(props) {
  return (
    <View style={styles.NavbarTop}>
      <TouchableOpacity
        style={styles.ButtonArrow}
        onPress={() => props.navigation.navigate('Customer')}>
        <View style={styles.Cart}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={styles.cartIcon}
            color="#000"
          />
        </View>
      </TouchableOpacity>

      <View style={styles.ButtonType}>
        <Text style={styles.TextType}> {props.typeText}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ButtonType: {
    margin: 5,
    width: '70%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 50,
  },
  TextType: {
    color: 'yellow',
    fontSize: 20,
  },
  ButtonArrow: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavbarTop: {
    flexDirection: 'row',
    backgroundColor: '#FF9900',
    alignItems: 'center',
  },
  Cart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    padding: 15,
  },
  Search: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Header;
