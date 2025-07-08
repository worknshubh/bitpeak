import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import primary_color from '../components/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Searchcard from '../components/searchCard';
const Watchlist = () => {
  const [watchList, setWatchlist] = useState(null);
  useEffect(() => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(res => {
        const temp = [];
        const data = res.data().watchlist;
        data.forEach(el => {
          temp.push(el);
        });
        setWatchlist(temp);
      });
  }, []);
  return (
    <SafeAreaView style={styles.mainScreen}>
      <FlatList
        data={watchList}
        renderItem={({ item }) => {
          return (
            <Searchcard
              searchdata={item}
              redirected_by={'watchlist'}
            ></Searchcard>
          );
        }}
      ></FlatList>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: primary_color,
    flex: 1,
  },
});
export default Watchlist;
