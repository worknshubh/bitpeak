import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import primary_color from '../components/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Trendingcard from '../components/trendingcards';
import { FlatList } from 'react-native-gesture-handler';
import API_KEY from '../keys';

const Homescreen = () => {
  const [topTrending, settopTrending] = useState(null);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': API_KEY,
      },
    })
      .then(data => data.json())
      .then(res => {
        const temp = [];
        const data = res.coins;
        data.forEach(element => {
          console.log(element);
          temp.push(element);
        });
        settopTrending(temp);
      });
  }, []);
  return (
    <SafeAreaView style={styles.mainScreen}>
      <FlatList
        data={topTrending}
        renderItem={({ item }) => {
          return <Trendingcard carddata={item}></Trendingcard>;
        }}
      ></FlatList>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: primary_color,
    flex: 1,
    padding: wp('5%'),
  },
});
export default Homescreen;
