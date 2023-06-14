import React, {useEffect, useState, createContext, useRef} from 'react';
import {Text, View, Image, StatusBar, Dimensions} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Button, Card} from '@rneui/themed';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import PhoneInput from 'react-native-phone-number-input';
import Toast from 'react-native-toast-message';
import CountDown from 'react-native-countdown-component';
const Login = () => {
  RNBootSplash.hide({fade: true, duration: 10});
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [confirm, setConfirm] = useState(null);
  const [flag, setFlag] = useState(false);
  const [code, setCode] = useState('');
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [name, setName] = useState(false);
  const [formattedValue, setFormattedValue] = useState('');
  const [expire, setExpire] = useState(false);
  const [login, setLogin] = useState(false);
  const phoneInput = useRef(null);
  const handleSend = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setValid(checkValid ? checkValid : false);
    if (checkValid === true) {
      signInWithPhoneNumber(formattedValue);
      setName(true);
    } else {
      Toast.show({
        type: 'error',
        text2: 'Phone Number Error',
        text1: 'Error',
        visibilityTime: 2000,
        autoHide: true,
      });
    }
  };
  const handleLogin = () => {
    confirmCode();
  };
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      navigation.navigate('form1');
      setLogin(true);
    } catch (error) {
      Toast.show({
        type: 'error',
        text2: 'Invalid code',
        text1: 'Error',
        visibilityTime: 2000,
        autoHide: true,
      });
      setCode('');
    }
  }
  const handleBack = () => {
    // setName(false);
  };
  return (
    <>
      <SafeAreaProvider>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="#EC2578"
        />
        <View
          style={{
            backgroundColor: '#FFFF',
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              height: 470,
              backgroundColor: '#EC2578',
            }}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 85,
                }}>
                <Image
                  style={{width: 40, height: 40, marginBottom: 2}}
                  source={require('../../image/logo1.png')}
                />
                <View>
                  <Image
                    style={{position: 'relative', width: 40, height: 35}}
                    source={require('../../image/logo2.png')}
                  />
                  <Image
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 11,
                      width: 20,
                      height: 20,
                    }}
                    source={require('../../image/logo3.png')}
                  />
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 700,
                    marginTop: 10,
                  }}>
                  FOODIE
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 21,
                    fontWeight: 600,
                    marginTop: 10,
                  }}>
                  Deliver Favourite Food
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 320,
              height: 398,
              borderRadius: 20,
              position: 'absolute',
              top: 280,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 50},
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 2,
              backgroundColor: '#ffff',
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 700,
                color: 'black',
                marginTop: 30,
              }}>
              Login
            </Text>
            <PhoneInput
              containerStyle={{
                marginHorizontal: 20,
                width: 300,
                marginTop: 30,
              }}
              ref={phoneInput}
              defaultValue={value}
              defaultCode="VN"
              layout="first"
              onChangeText={text => {
                setValue(text);
              }}
              onChangeFormattedText={text => {
                setFormattedValue(text);
              }}
              withLightTheme
              withShadow
            />
            {!!name ? (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                      fontWeight: 500,
                      marginTop: 20,
                    }}>
                    Code expires
                  </Text>
                  <CountDown
                    style={{marginTop: 20, marginLeft: 10}}
                    until={180}
                    size={10}
                    onFinish={() => {
                      return login
                        ? Toast.show({
                            type: 'error',
                            text2: ' Code expired',
                            text1: 'Error',
                            visibilityTime: 2000,
                            autoHide: true,
                          })
                        : null;
                    }}
                    timeToShow={['M', 'S']}
                    timeLabels={{m: null, s: null}}
                  />
                </View>
                <OTPInputView
                  code={code}
                  onCodeChanged={code => setCode(code)}
                  style={{width: 300, height: 80, color: 'black'}}
                  pinCount={6}
                  codeInputFieldStyle={{
                    borderColor: '#C1C1C1',
                    width: 40,
                    color: 'black',
                  }}
                  codeInputHighlightStyle={{borderColor: 'black'}}
                />
              </>
            ) : null}
            <View
              style={{
                position: 'absolute',
                bottom: name === false ? 80 : 5,
              }}>
              <Button
                onPress={name === false ? handleSend : handleLogin}
                title={name === false ? 'Send OTP' : 'Login'}
                buttonStyle={{
                  backgroundColor: '#EC2578',
                  borderRadius: 40,
                  width: 210,
                  height: 68,
                }}
              />
              <Text
                onPress={handleBack}
                style={{
                  color: '#EC2578',
                  textAlign: 'center',
                  marginTop: 5,
                  textDecorationLine: 'underline',
                }}>
                Back
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'relative',
              marginTop: 280,
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: 600}}>
              Don’t have an account?
            </Text>
            <Text style={{color: '#EC2578', fontSize: 17, fontWeight: 600}}>
              REGISTER
            </Text>
          </View>
        </View>
        <Toast />
      </SafeAreaProvider>
    </>
  );
};
export default Login;
