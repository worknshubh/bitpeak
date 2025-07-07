import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import primary_color from '../components/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import API_KEY from '../keys';
const Graphscreen = () => {
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = { day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  }
  const route = useRoute();
  let { props, redirected_by } = route.params;

  const [coin_data, setCoin_data] = useState([]);
  const [coin_info, setCoin_info] = useState(null);
  let coin_id = '';
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (redirected_by === 'Trending') {
          coin_id = props.carddata.item.id;
        } else {
          coin_id = props.searchdata.id;
        }
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=usd&days=180`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': API_KEY,
            },
          },
        );

        const fetch_coin_data = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin_id}`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': API_KEY,
            },
          },
        );

        const fetch_json = await fetch_coin_data.json();
        const coin_temp = [];
        fetch_json.forEach(el => {
          coin_temp.push(el);
          // console.log('coin temp', coin_temp);
        });
        setCoin_info(coin_temp);
        const json = await res.json();
        const temp = [];
        json.prices.forEach(element => {
          const data = {
            date: formatDate(element[0]),
            price: element[1] / 1000,
          };

          temp.push(data);
        });

        setCoin_data(temp);
      } catch (error) {}
    };

    fetchData();
  }, []);
  const dates = [];
  const prices = [];
  // console.log(coin_data);
  coin_data.map((el, index) => {
    if (index % 30 === 0) {
      dates.push(el.date);
      prices.push(el.price);
      // console.log('date is', el.date, 'and price is ', el.price);
      // console.log(dates);
      // console.log(prices);
    }
    // console.log('here are prices ', prices);
  });
  return (
    <ScrollView style={styles.mainScreen}>
      <View
        style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}
      >
        <LineChart
          data={{
            labels: dates.length > 0 ? dates : [''],
            datasets: [
              {
                data: prices.length > 0 ? prices : [0],
              },
            ],
          }}
          width={Dimensions.get('window').width - 35} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={styles.textview}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontFamily: 'Kanit-Regular',
            color: '#E09913',
          }}
        >
          {redirected_by === 'Trending'
            ? props.carddata.item.name
            : props.searchdata.name}
        </Text>
        <Text style={{ padding: 15, textAlign: 'justify', color: 'white' }}>
          {redirected_by === 'Trending'
            ? props.carddata.item.data.content === null
              ? ''
              : props.carddata.item.data.content.description
            : ''}
        </Text>
      </View>
      <View style={styles.coindata}>
        <Text
          style={{
            color: '#E09913',
            fontFamily: 'Kanit-Medium',
          }}
        >
          Market Rank:{' '}
          {redirected_by === 'Trending'
            ? props.carddata.item.market_cap_rank
            : props.searchdata.market_cap_rank}
        </Text>

        <Text
          style={{
            color: 'white',
            fontFamily: 'Kanit-Light',
            fontSize: 18,
            marginTop: 5,
          }}
        >
          Total Volume: ${' '}
          {coin_info != null ? coin_info[0].total_volume : 'Loading'}
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Kanit-Light',
            fontSize: 18,
            marginTop: 5,
          }}
        >
          Price: ${coin_info != null ? coin_info[0].current_price : 'Loading'}
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Kanit-Light',
            fontSize: 18,
            marginTop: 5,
          }}
        >
          High [24h]: ${coin_info != null ? coin_info[0].high_24h : 'Loading'}
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Kanit-Light',
            fontSize: 18,
            marginTop: 5,
          }}
        >
          Low [24h]: ${coin_info != null ? coin_info[0].low_24h : 'Loading'}
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Kanit-Light',
            fontSize: 18,
            marginTop: 5,
          }}
        >
          Market Capital: ${' '}
          {coin_info != null ? coin_info[0].market_cap : 'Loading'}
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#E09913',
            padding: 13,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Kanit-Regular',
              }}
            >
              Add to Watchlist
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          padding: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Kanit-Regular',
            color: '#2B2A2A',
          }}
        >
          Made With 💛
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Kanit-Regular',
            color: '#2B2A2A',
          }}
        >
          By Shubh
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: primary_color,
    flex: 1,
    borderTopColor: '#E09913',
    borderTopWidth: 1,
  },
  textview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  coindata: {
    padding: 20,
    margin: 20,
    backgroundColor: '#2B2A2A',
    borderRadius: 15,
  },
});
export default Graphscreen;
