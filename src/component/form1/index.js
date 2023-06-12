import React, {useEffect, useState, createContext} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const Form1 = () => {
  RNBootSplash.hide({fade: true, duration: 10});
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaProvider style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#F68989" />

        <View
          style={{
            backgroundColor: '#F68989',
            flex: 1,
            height: '100%',
            position: 'relative',
          }}>
          <Image
            style={{height: 595, width: 414, resizeMode: 'cover'}}
            source={require('../../image/image1.png')}
          />
          <LottieView
            source={require('../../assets/animation/food.json')}
            autoPlay
            loop
            style={{
              zIndex: 1,
            }}
          />
          <View
            style={{
              height: 285,
              marginHorizontal: 35,
              borderRadius: 26,
              position: 'absolute',
              bottom: 100,
              backgroundColor: '#ffff',
              zIndex: 100,
            }}>
            <View
              style={{
                marginTop: 41,
                marginHorizontal: 37,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#4F4F4F',
                  fontWeight: 600,
                  fontSize: 22,
                  lineHeight: 34,
                }}>
                Quick Delivery at your
              </Text>
              <Text
                style={{
                  color: '#F68989',
                  fontWeight: 600,
                  fontSize: 22,
                  lineHeight: 34,
                  textAlign: 'center',
                }}>
                Doorstep
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginHorizontal: 16,
                  marginTop: 11,
                }}>
                Home delivery and onlione reservation system for retaurants and
                cafe
              </Text>

              <Button
                onPress={() => navigation.navigate('form2')}
                title="Get started"
                buttonStyle={{
                  backgroundColor: '#F68989',
                  borderRadius: 40,
                  width: 210,
                  height: 68,
                  marginTop: 22,
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Form1;
