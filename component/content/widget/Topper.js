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

function Topper(props) {
  return (
    <View style={styles.NavbarTop}>
      <TouchableOpacity
        style={styles.ButtonCart}
        onPress={() => props.navigation.navigate('Home')}>
        <View style={styles.Cart}>
          <FontAwesomeIcon
            icon={faCartPlus}
            style={styles.cartIcon}
            color="#000"
          />
          <View style={styles.coin}>
            <Text style={styles.coinText}>0</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.Search}>
        <FontAwesomeIcon
          icon={faSearch}
          style={styles.searchIcon}
          color="gray"
        />
        <TextInput style={styles.TextSearch} placeholder="Search" />
        <FontAwesomeIcon icon={faTimes} style={styles.crossIcon} color="gray" />
      </View>
      <TouchableOpacity
        style={styles.ButtonBars}
        onPress={() => props.navigation.navigate('Home')}>
        <FontAwesomeIcon icon={faBars} style={styles.barsIcon} color="yellow" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ButtonType: {
    margin: 5,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  ButtonCart: {
    width: '15%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
  },
  ButtonBars: {
    width: '15%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
  },
  TextType: {
    color: 'yellow',
    fontSize: 20,
  },
  Navbar: {
    flexDirection: 'row',
    backgroundColor: '#FF9900',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  NavbarTop: {
    flexDirection: 'row',
    backgroundColor: '#FF9900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    padding: 5,
  },
  crossIcon: {
    padding: 4,
  },
  barsIcon: {
    padding: 15,
  },
  cartIcon: {
    padding: 15,
  },
  coin: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  coinText: {
    color: '#FF9900',
  },
  Cart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextSearch: {
    borderRadius: 25,
    width: '70%',
  },
  Search: {
    backgroundColor: '#FFCC66',
    flexDirection: 'row',
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Topper;
