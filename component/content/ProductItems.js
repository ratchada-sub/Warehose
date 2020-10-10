import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function ProductItems() {
  const image = require('../../assets/rice.jpg');

  return (
    <View style={styles.container} >
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
export default ProductItems;
