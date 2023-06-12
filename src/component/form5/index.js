import React, {useEffect, useState, createContext} from 'react';
import {Text, View, Image, StatusBar, Dimensions} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CheckBox} from '@rneui/themed';
import LottieView from 'lottie-react-native';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Button} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
const Form5 = ({route}) => {
  const [selectedIndex, setIndex] = useState(0);
  const [selectedIndex1, setIndex1] = useState(0);
  const navigation = useNavigation();
  const {totalMoney} = route.params;
  const [showLottie, setShowLottie] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const handlePayment = () => {
    setShowLottie(true);
  };
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#EDEDED" />
        <View
          style={{
            backgroundColor: '#EDEDED',
            flex: 1,
          }}>
          {showLottie && (
            <LottieView
              style={{zIndex: 10}}
              source={require('../../assets/animation/animation.json')}
              autoPlay
              loop={false}
              onAnimationFinish={() => setShowLottie(false)}
            />
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 50,
              paddingHorizontal: 40,
              justifyContent: 'center',
            }}>
            <AntDesign
              name="left"
              style={{color: 'black', position: 'absolute', left: 40}}
              size={30}
              onPress={() => navigation.navigate('form2')}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 600,
              }}>
              Checkout
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 34,
              fontWeight: 600,
              marginLeft: 40,
              marginTop: 40,
            }}>
            Payment
          </Text>
          <View style={{marginTop: 28, marginLeft: 40}}>
            <Text style={{color: 'black', fontSize: 17, fontWeight: 600}}>
              Payment method
            </Text>
            <View
              style={{
                marginTop: 20,
                width: 315,
                height: 205,
                backgroundColor: '#ffff',
                borderRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  borderBottomColor: '#DEE1E6',
                  borderBottomWidth: 1,
                  paddingBottom: 20,
                }}>
                <CheckBox
                  checked={selectedIndex === 0}
                  onPress={() => setIndex(0)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#F47B0A',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('../../image/card.png')} />
                </View>
                <Text style={{color: 'black', fontSize: 17, marginLeft: 11}}>
                  Card
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <CheckBox
                  checked={selectedIndex === 1}
                  onPress={() => setIndex(1)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#EB4796',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('../../image/banking.png')} />
                </View>
                <Text style={{color: 'black', fontSize: 17, marginLeft: 11}}>
                  Bank account
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 20, marginLeft: 40}}>
            <Text style={{color: 'black', fontSize: 17, fontWeight: 600}}>
              Delivery method
            </Text>
            <View
              style={{
                marginTop: 20,
                width: 315,
                height: 156,
                backgroundColor: '#ffff',
                borderRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  borderBottomColor: '#DEE1E6',
                  borderBottomWidth: 1,
                  paddingBottom: 8,
                }}>
                <CheckBox
                  checked={selectedIndex1 === 0}
                  onPress={() => setIndex1(0)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />

                <Text style={{color: 'black', fontSize: 17, marginLeft: 11}}>
                  Door delivery
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <CheckBox
                  checked={selectedIndex1 === 1}
                  onPress={() => setIndex1(1)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />

                <Text style={{color: 'black', fontSize: 17, marginLeft: 11}}>
                  Pick up
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 40,
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
              }}>
              Total:
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 22,
              }}>
              $ {totalMoney}
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Button
              onPress={handlePayment}
              title="Proceed to payment"
              buttonStyle={{
                backgroundColor: '#F68989',
                borderRadius: 30,
                width: 314,
                height: 70,
              }}
            />
          </View>
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Form5;
