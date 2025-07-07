import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Trendingcard = props => {
  const navigation = useNavigation();
  function redirect_graphdata() {
    navigation.navigate('graphScreen', { props });
  }
  return (
    <TouchableOpacity onPress={redirect_graphdata}>
      <View style={styles.card_container}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.texts, { fontSize: 18 }]}>
            {props.carddata.item.score + 1}.
          </Text>
          <Text style={[styles.texts, { fontSize: 18 }]}>
            {props.carddata.item.name}
          </Text>
          <Text
            style={[
              styles.texts,
              { fontSize: 18, color: '#E09913', width: 100 },
            ]}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            [{props.carddata.item.symbol}]
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 25,
          }}
        >
          <Text style={styles.texts}>
            ${' ' + props.carddata.item.data.price.toFixed(2)}
          </Text>
          <Text
            style={[
              styles.texts,
              {
                color:
                  props.carddata.item.data.price_change_percentage_24h.usd < 0
                    ? 'red'
                    : 'green',
              },
            ]}
          >
            24h:
            {' ' +
              Math.round(
                props.carddata.item.data.price_change_percentage_24h.usd,
              ) +
              '%'}
          </Text>
        </View>
        <View style={{ marginLeft: 25 }}>
          <Text style={[styles.texts, { fontSize: 15, textAlign: 'left' }]}>
            Market Cap:{props.carddata.item.data.market_cap}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card_container: {
    backgroundColor: '#2B2A2A',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 8,
  },
  texts: {
    color: 'white',
    fontSize: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    fontFamily: 'Kanit-Regular',
  },
});
export default Trendingcard;
