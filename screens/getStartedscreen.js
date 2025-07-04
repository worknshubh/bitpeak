import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import primary_color from '../components/colors';

const Getstartedscreen = () => {
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
export default Getstartedscreen;
