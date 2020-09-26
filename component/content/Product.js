import React,{useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Topper from './widget/Topper';
import Header from './widget/Header';
function Product({route, navigation}) {
  const {typeText} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.HeaderTop}>
        <View style={styles.Top}>
          <Topper />
        </View>
        <View style={styles.Top}>
          <Header typeText={typeText} navigation={navigation} />
        </View>
      </View>
      <View>
        <Text>Product</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderTop: {
    backgroundColor: 'yellow',
  },
  Top: {
    marginBottom: 10,
  },
});
export default Product;
