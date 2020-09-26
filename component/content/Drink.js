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
import Header from './widget/Header';
function Drink({navigation}) {
  return (
    <View style={styles.container}>
      <Header typeText="Drink" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Drink;
