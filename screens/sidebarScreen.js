import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import primary_color from '../components/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LottieView from 'lottie-react-native';
const Sidebar = props => {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerlist}>
      <LottieView
        source={require('../assets/lottie/started.json')}
        autoPlay
        loop
        style={{ height: hp('35%') }}
      ></LottieView>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontFamily: 'Kanit-Regular',
          color: '#E09913',
          marginBottom: 15,
        }}
      >
        BitPeak
      </Text>
      <DrawerItemList {...props}></DrawerItemList>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  drawerlist: {
    backgroundColor: primary_color,
  },
});
export default Sidebar;
