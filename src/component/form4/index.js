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
import PhoneInput from 'react-native-phone-number-input';
import Toast from 'react-native-toast-message';
const Form4 = ({route}) => {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const {img, money, count, title} = route?.params;
  const [totalCount, setTotalCount] = useState(count);
  const [totalMoney, setTotalMoney] = useState(money);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const phoneInput = useRef(null);
  useEffect(() => {
    setTotalMoney(
      totalCount > 0 ? (totalCount * (money / count)).toFixed(2) : 0,
    );
  }, [totalCount]);
  const handleSubmit = () => {
    if (totalCount > 0) {
      const checkValid = phoneInput.current?.isValidNumber(value);
      setValid(checkValid ? checkValid : false);
      if (checkValid === true) {
        navigation.navigate('form5', {totalMoney});
        setTotalMoney(0);
        setTotalCount(0);
      } else {
        Toast.show({
          type: 'error',
          text2: 'Phone Number Error',
          text1: 'Error',
          visibilityTime: 2000,
          autoHide: true,
        });
      }
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
                style={{
                  marginHorizontal: 20,
                  height: 70,
                  backgroundColor: '#F8F9F9',
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 50},
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 2,
                }}
                mode="flat"
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
                style={{
                  marginHorizontal: 20,
                  height: 70,
                  backgroundColor: '#F8F9F9',
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 50},
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 2,
                }}
                mode="flat"
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
              <PhoneInput
                containerStyle={{
                  marginHorizontal: 20,
                  width: windowWidth - 40,
                  borderBottomWidth: 0.6,
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
              <Text style={{color: 'red', fontSize: 20}}>${totalMoney}</Text>
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
