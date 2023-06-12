import React, {useEffect, useState, createContext, useRef} from 'react';
import {Text, View, Image, StatusBar, Dimensions} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Button, Card, CheckBox} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-paper';
import {ButtonGroup} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import LottieView from 'lottie-react-native';
const Form4 = ({route}) => {
  const navigation = useNavigation();
  const {img, money, count, title} = route.params;
  const [showLottie, setShowLottie] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [totalCount, setTotalCount] = useState(count);
  const [totalMoney, setTotalMoney] = useState(money);
  useEffect(() => {
    setTotalMoney(
      totalCount > 0 ? (totalCount * (money / count)).toFixed(2) : 0,
    );
  }, [totalCount]);
  const handleSubmit = () => {
    if (totalCount > 0) {
      setShowLottie(true);
      setTotalMoney(0);
      setTotalCount(0);
    } else {
      Toast.show({
        type: 'error',
        text2: 'Please choose a product',
        text1: 'Error',
        visibilityTime: 2000,
        autoHide: true,
      });
    }
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
          {showLottie && (
            <LottieView
              style={{zIndex: 10}}
              source={require('../../assets/animation/animation.json')}
              autoPlay
              loop={false}
              onAnimationFinish={() => setShowLottie(false)}
            />
          )}
          <View style={{marginHorizontal: 20, marginTop: 40}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 500}}>
              {totalCount < 0 ? 0 : totalCount} items in cart
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 160, height: 120, resizeMode: 'cover'}}
                  source={img}
                />
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
                    {title}
                  </Text>
                  <Text
                    style={{
                      color: 'red',
                      fontWeight: 'bold',
                      marginTop: 10,
                      fontSize: 18,
                    }}>
                    ${totalMoney}
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <AntDesign
                      style={{color: '#F68989', fontSize: 20}}
                      name="minuscircleo"
                      onPress={() => setTotalCount(prev => prev - 1)}
                    />
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        marginHorizontal: 10,
                      }}>
                      {totalCount < 0 ? 0 : totalCount}
                    </Text>
                    <Ionicons
                      onPress={() => setTotalCount(prev => prev + 1)}
                      style={{color: '#F68989', fontSize: 22}}
                      name="add-circle-outline"
                    />
                  </View>
                </View>
              </View>
              <View>
                <MaterialIcons
                  onPress={() => navigation.goBack()}
                  style={{color: '#F68989', fontSize: 20}}
                  name="cancel"
                />
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginTop: 20,
                  marginLeft: 20,
                  marginBottom: 10,
                }}>
                Name
              </Text>
              <TextInput
                style={{marginHorizontal: 20}}
                mode="outlined"
                label="Name"
                placeholder="Your name"
                right={<TextInput.Affix text="/100" />}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginTop: 20,
                  marginLeft: 20,
                  marginBottom: 10,
                }}>
                Address
              </Text>
              <TextInput
                style={{marginHorizontal: 20}}
                mode="outlined"
                label="Address"
                placeholder="Address"
                right={<TextInput.Affix text="/100" />}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginTop: 20,
                  marginLeft: 20,
                  marginBottom: 10,
                }}>
                Phone
              </Text>
              <TextInput
                keyboardType="numeric"
                style={{marginHorizontal: 20}}
                mode="outlined"
                label="Phone"
                placeholder="Phone"
                right={<TextInput.Affix text="/100" />}
              />
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginTop: 20,
              }}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
                Total:
              </Text>
              <Text style={{color: 'red', fontSize: 14}}>${totalMoney}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Button
                onPress={handleSubmit}
                title="CHECKOUT"
                buttonStyle={{
                  backgroundColor: '#F68989',
                  borderRadius: 12,
                  width: 310,
                  marginTop: 20,
                  height: 53,
                }}
              />
            </View>
            <Text
              onPress={() => navigation.navigate('form2')}
              style={{
                textAlign: 'center',
                marginTop: 20,
                color: '#F68989',
                textDecorationLine: 'underline',
              }}>
              Back to Menu
            </Text>
          </View>
        </View>
        <Toast />
      </SafeAreaProvider>
    </>
  );
};
export default Form4;
