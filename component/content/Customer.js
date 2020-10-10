import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faCartPlus,
  faSearch,
  faTimes,
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Topper from './widget/Topper';
import {TextInput} from 'react-native-gesture-handler';
import ProductType from './widget/ProductType';
import ProductItems from './ProductItems';

function Customer({route, navigation}) {
  const {shopName} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.HeaderTop}>
        <Topper navigation={navigation} />
        <ProductType navigation={navigation} />
      </View>
      <View style={styles.brand}>
        <Text style={styles.brandText}>{shopName}</Text>
      </View>
      <View>
        <ProductItems />
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
  brand: {
    flex:1,
    alignItems:'center',
    marginTop:30
  },
  brandText:{
    fontSize:30,
    fontWeight:'bold',
    backgroundColor:'#000',
    borderWidth:1,
    borderRadius:10,
    color:'yellow',
    padding:5
  }
});
export default Customer;
