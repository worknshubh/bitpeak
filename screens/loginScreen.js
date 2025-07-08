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
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
const Login = () => {
  const navigation = useNavigation();
  const [userEmail, setuserEmail] = useState(null);
  const [userPass, setuserPass] = useState(null);
  function loginandredirect() {
    if (userEmail != null && userPass != null) {
      auth()
        .signInWithEmailAndPassword(userEmail, userPass)
        .then(() => {
          navigation.replace('drawerScreen');
        })
        .catch(error => {
          Toast.show({
            type: 'error',
            text1: 'Login Failed',
          });
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please Fill Credentials First ',
      });
    }
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
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('Signup');
            }}
          >
            <Text style={{ color: 'white', fontFamily: 'Kanit-Light' }}>
              Don't have an account? Sign up
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
        >
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Kanit-Regular',
                fontSize: 18,
              }}
              onPress={loginandredirect}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Toast />
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
export default Login;
