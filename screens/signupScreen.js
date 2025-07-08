import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import primary_color from '../components/colors';
import LottieView from 'lottie-react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
const Signup = () => {
  const navigation = useNavigation();
  const [userName, setuserNmae] = useState(null);
  const [userEmail, setuserEmail] = useState(null);
  const [userPass, setuserPass] = useState(null);
  const [confirmuserPass, confrimPass] = useState(null);

  function verifyallfields() {
    if (userEmail != null && userName != null && userPass != null) {
      if (userPass === confirmuserPass) {
        signupandredirect();
      } else {
        Toast.show({
          type: 'error',
          text1: 'Password not Matching',
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Fill all Fields!!!',
      });
    }
  }
  function signupandredirect() {
    auth()
      .createUserWithEmailAndPassword(userEmail, userPass)
      .then(res => {
        firestore().collection('users').doc(res.user.uid).set({
          username: userName,
          useremail: userEmail,
          watchlist: [],
        });
      })
      .then(navigation.replace('Login'));
  }
  return (
    <View style={styles.mainScreen}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          top: 40,
        }}
      >
        <LottieView
          source={require('../assets/lottie/eye.json')}
          autoPlay
          loop
          style={{ height: 200, width: 200 }}
        ></LottieView>
      </View>
      <View>
        <Text
          style={{
            fontSize: 40,
            color: '#E09913',
            fontFamily: 'Kanit-Medium',
            textAlign: 'center',
          }}
        >
          BitPeak
        </Text>
      </View>
      <View style={styles.loginfield}>
        <TextInput
          placeholder="Enter Your Name"
          style={{
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#E09913',
            color: 'white',
          }}
          value={userName}
          onChangeText={text => {
            setuserNmae(text);
          }}
        ></TextInput>
        <TextInput
          placeholder="Enter Your Email"
          style={{
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#E09913',
            color: 'white',
          }}
          value={userEmail}
          onChangeText={text => {
            setuserEmail(text);
          }}
        ></TextInput>
        <TextInput
          placeholder="Enter Your Password"
          style={{
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#E09913',
            color: 'white',
          }}
          secureTextEntry={true}
          value={userPass}
          onChangeText={text => {
            setuserPass(text);
          }}
        ></TextInput>
        <TextInput
          placeholder="Confirm Your Password"
          style={{
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#E09913',
            color: 'white',
          }}
          secureTextEntry={true}
          value={confirmuserPass}
          onChangeText={text => {
            confrimPass(text);
          }}
        ></TextInput>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('Login');
            }}
          >
            <Text style={{ color: 'white', fontFamily: 'Kanit-Light' }}>
              Already have an Account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 15,
            marginHorizontal: 30,
            borderRadius: 15,
          }}
          onPress={verifyallfields}
        >
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Kanit-Regular',
                fontSize: 18,
              }}
            >
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Toast></Toast>
    </View>
  );
};
const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: primary_color,
    flex: 1,
  },
  textfield: {
    fontSize: 28,
    fontFamily: 'Kanit-Regular',
    color: 'white',
  },
  loginfield: {
    margin: 20,
    padding: 10,
  },
});

export default Signup;
