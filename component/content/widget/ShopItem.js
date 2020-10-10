import React, {useState} from 'react';
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
  SectionList,
  Image,
} from 'react-native';

function ShopItem(props) {
  const [shoping, setShoping] = useState([
    {
      picture: require('../../../assets/seven.jpg'),
      name: 'Seven',
    },
    {
      picture: require('../../../assets/jiffy.jpg'),
      name: 'Jiffy',
    },
    {
      picture: require('../../../assets/108.png'),
      name: '108 Shop',
    },
    {
      picture: require('../../../assets/family.jpg'),
      name: 'Family',
    },
    {
      picture: require('../../../assets/lotus.jpg'),
      name: 'Lotus',
    },
    {
      picture: require('../../../assets/bigc.jpg'),
      name: 'Big C',
    },
  ]);

  return (
    <View>
      <View style={(styles.container, {alignItems: 'center'})}>
        <Text
          style={{
            color: 'yellow',
            fontSize: 20,
            backgroundColor: '#000',
            padding: 5,
            borderRadius: 10,
          }}>
          Selct the store you want buy
        </Text>
      </View>
      <View style={styles.item}>
        {shoping.map((
          item,
          index, //map ใช้วนลุปข้อมูล
        ) => (
          <TouchableOpacity
            style={styles.itemListBox}
            key={index}
            onPress={() =>
              props.navigation.navigate('Customer', {shopName: item.name})
            }>
            <View style={styles.itemList}>
              <Image style={styles.itemImage} source={item.picture} />
            
            <Text style={styles.itemListText}>{item.name}</Text></View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemList: {
    marginTop: 10,
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  
    padding:5,
  },
  itemImage: {
    width: '100%',
    height: 100,
  },
  itemListBox: {
    width: '50%',
    height: 150,
    borderColor: '#000',
    borderWidth: 1,
  },
  itemListText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ShopItem;
