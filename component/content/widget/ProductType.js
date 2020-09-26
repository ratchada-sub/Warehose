import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function ProductType(props) {
  return (
    <View style={styles.Navbar}>
      <TouchableOpacity
        style={styles.ButtonType}
        onPress={() =>
          props.navigation.navigate('Product', {typeText: 'Drinks'})
        }>
        <Text style={styles.TextType}>Drinks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ButtonType}
        onPress={() =>
          props.navigation.navigate('Product', {typeText: 'Snacks'})
        }>
        <Text style={styles.TextType}>Snacks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ButtonType}
        onPress={() =>
          props.navigation.navigate('Product', {typeText: 'Foods'})
        }>
        <Text style={styles.TextType}>Foods</Text>
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
export default ProductType;
