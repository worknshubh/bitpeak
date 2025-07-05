import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import primary_color from '../components/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
const Getstartedscreen = ({ navigation }) => {
  function redirecttohome() {
    navigation.replace('drawerScreen');
  }
  return (
    <SafeAreaView style={styles.mainScreen}>
      <View style={styles.punchline_container}>
        <Text style={styles.punchline}>Real Time Rates</Text>
        <Text
          style={[
            styles.punchline,
            { fontSize: 15, textAlign: 'left', marginLeft: wp('14%') },
          ]}
        >
          Real Smart Move
        </Text>
      </View>
      <View style={styles.lottie_container}>
        <LottieView
          source={require('../assets/lottie/started.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.btn} onPress={redirecttohome}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Kanit-Regular',
              fontSize: 20,
            }}
          >
            Start Tracking
          </Text>
        </TouchableOpacity>
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
  punchline_container: {
    marginTop: hp('7%'),
  },
  lottie: {
    height: hp('40%'),
  },
  lottie_container: {
    // borderWidth: 2,
    marginTop: hp('10%'),
  },
  button_container: {
    marginTop: hp('10%'),
  },
  btn: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
  },
});
export default Getstartedscreen;
