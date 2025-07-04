import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import primary_color from '../components/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Getstartedscreen = () => {
  return (
    <SafeAreaView style={styles.mainScreen}>
      <View>
        <Text style={styles.punchline}>Real Time Rates</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: primary_color,
    flex: 1,
    padding: wp('10%'),
  },
  punchline: {
    color: 'white',
    fontFamily: 'Kanit-Regular',
    fontSize: 30,
    textAlign: 'center',
  },
});
export default Getstartedscreen;
