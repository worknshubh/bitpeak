import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import primary_color from '../components/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Profile = () => {
  return (
    <SafeAreaView style={styles.mainScreen}>
      <View></View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: primary_color,
    flex: 1,
  },
});
export default Profile;
