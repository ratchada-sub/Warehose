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
function Customer({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.HeaderTop}>
        <Topper />
        <ProductType navigation={navigation}/>
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
});
export default Customer;
