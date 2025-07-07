import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import primary_color from '../components/colors';
import API_KEY from '../keys';
import Trendingcard from '../components/trendingcards';
import Searchcard from '../components/searchCard';

const Searchmenu = () => {
  const [userSearch, setuserSearch] = useState(null);
  const [searchResult, setsearchResult] = useState(null);
  function searchCoin() {
    const fetchCoin = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${userSearch}`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': API_KEY,
          },
        },
      );
      const temp = [];
      let output = await res.json();
      output = output.coins;

      output.forEach(el => {
        console.log(el);
        temp.push(el);
      });
      setsearchResult(temp);
    };
    fetchCoin();
  }

  return (
    <View style={styles.mainScreen}>
      <View style={styles.searcharea}>
        <TextInput
          placeholder="Enter the name of the coin "
          style={{
            color: 'black',
            borderBottomColor: '#E09913',
            borderBottomWidth: 1,
            width: '88%',
          }}
          placeholderTextColor={'black'}
          value={userSearch}
          onChangeText={text => setuserSearch(text)}
        ></TextInput>
        <TouchableOpacity onPress={searchCoin}>
          <Image
            source={require('../assets/images/Search.png')}
            style={{ tintColor: '#E09913', height: 30, width: 30 }}
          ></Image>
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchResult}
        renderItem={({ item }) => {
          return <Searchcard searchdata={item}></Searchcard>;
        }}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  mainScreen: {
    borderTopColor: '#E09913',
    borderTopWidth: 1,
    backgroundColor: primary_color,
    flex: 1,
  },
  searcharea: {
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    flexDirection: 'row',
  },
});
export default Searchmenu;
