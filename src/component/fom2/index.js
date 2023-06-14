import React, {useEffect, useState, createContext} from 'react';
import {Text, View, Image, StatusBar, Dimensions} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Button, Card} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import CardFood from './card';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
const Form2 = () => {
  RNBootSplash.hide({fade: true, duration: 10});
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [opa, setOpa] = useState(0);
  const [showInput, setSHowInput] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const deviceHeight = Dimensions.get('window').height + 100;

  const modalNavigation = () => {
    return (
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="left"
        deviceHeight={deviceHeight}
        onSwipeComplete={toggleModal}
        animationIn="bounceInLeft"
        animationOut="bounceOutLeft"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        backdropOpacity={0.7}
        style={{
          width: '50%',
          height: deviceHeight,
          marginLeft: 0,
          marginBottom: 0,
        }}>
        <View
          style={{
            backgroundColor: '#ffff',
            height: deviceHeight,
            alignItems: 'center',
            paddingTop: 100,
          }}>
          <LottieView
            source={require('../../assets/animation/menu.json')}
            autoPlay
            loop
            style={{
              zIndex: 1,
              top: 200,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: -80,
            }}>
            <Image
              source={require('../../image/new2.png')}
              style={{width: 60, height: 60, borderRadius: 100}}
            />
            <Text style={{color: 'black'}}>C.Ronaldo</Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: '#F68989',
              fontWeight: 'bold',
              marginTop: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#E8EAED',
            }}>
            Home
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#F68989',
              fontWeight: 'bold',
              marginTop: 50,
              borderBottomWidth: 1,
              borderBottomColor: '#E8EAED',
            }}>
            Search
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#F68989',
              fontWeight: 'bold',
              marginTop: 50,
              borderBottomWidth: 1,
              borderBottomColor: '#E8EAED',
            }}>
            Menu
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#F68989',
              fontWeight: 'bold',
              marginTop: 50,
              borderBottomWidth: 1,
              borderBottomColor: '#E8EAED',
            }}>
            Cart
          </Text>
        </View>
      </Modal>
    );
  };
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#ffff" />
        <View
          style={{
            backgroundColor: '#FFFF',
            flex: 1,
          }}>
          {modalNavigation()}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 30,
              marginTop: 35,
            }}>
            <Feather
              size={30}
              style={{color: 'black'}}
              name={'menu'}
              onPress={toggleModal}
            />
            <View
              style={{
                backgroundColor: '#F68989',
                width: 30,
                height: 30,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather
                onPress={() => navigation.navigate('Search')}
                size={20}
                style={{color: 'white'}}
                name={'search'}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: '#F68989',
              marginTop: 43,
              marginLeft: 23,
            }}>
            Hi Alex
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 21,
              fontWeight: 600,
              marginLeft: 23,
            }}>
            Find your Delicious Food
          </Text>
          <View style={{flexDirection: 'row', marginTop: 28, marginLeft: 27}}>
            <View
              onTouchStart={() => setOpa(0)}
              style={{opacity: opa === 0 ? 1 : 0.5}}>
              <Image
                style={{width: 44, height: 44, marginRight: 33}}
                source={require('../../image/image8.png')}
              />
              <Text style={{fontSize: 10}}>Fast Food</Text>
            </View>
            <View
              onTouchStart={() => setOpa(1)}
              style={{opacity: opa === 1 ? 1 : 0.5}}>
              <Image
                style={{width: 44, height: 44, marginRight: 33}}
                source={require('../../image/image6.png')}
              />
              <Text style={{fontSize: 10, marginLeft: 10}}>Italian</Text>
            </View>
            <View
              onTouchStart={() => setOpa(2)}
              style={{opacity: opa === 2 ? 1 : 0.5}}>
              <Image
                style={{width: 44, height: 44, marginRight: 33}}
                source={require('../../image/image7.png')}
              />
              <Text style={{fontSize: 10}}>Japanese</Text>
            </View>
            <View
              onTouchStart={() => setOpa(3)}
              style={{opacity: opa === 3 ? 1 : 0.5}}>
              <Image
                style={{width: 44, height: 39}}
                source={require('../../image/image5.png')}
              />
              <Text style={{marginTop: 5, fontSize: 10}}>Sea food</Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                marginLeft: 23,
                marginTop: 30,
                fontSize: 21,
                color: 'black',
              }}>
              Popular
            </Text>
            <View style={{flexDirection: 'row'}}>
              <CardFood flag={opa} />
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Form2;
