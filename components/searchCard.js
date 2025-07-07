import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Searchcard = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        const redirected_by = 'Search';
        navigation.navigate('graphScreen', { props, redirected_by });
      }}
    >
      <View
        style={{
          padding: 20,
          margin: 20,
          backgroundColor: '#2B2A2A',
          borderRadius: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Text
          style={{ fontFamily: 'Kanit-Medium', color: 'white', fontSize: 18 }}
        >
          {props.searchdata.name}
        </Text>
        <Text style={{ fontFamily: 'Kanit-Light', color: '#E09913' }}>
          [{props.searchdata.symbol}]
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Searchcard;
