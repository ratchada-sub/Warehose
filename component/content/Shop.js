import React from 'react';
import {StyleSheet,View,Text,Button,TouchableOpacity} from 'react-native';

import Topper from './widget/Topper';
import Header from './widget/Header';
import ShopItem from './widget/ShopItem'
function Shop({ navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.HeaderTop}>
        <View style={styles.Top}>
          <Topper navigation={navigation} />
        </View>
      </View>
      <View style={styles.shopItem}>
        <ShopItem navigation={navigation}/>
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
      shopItem:{
          marginTop:10
      }
});
export default Shop;
