import React, {useEffect, useState, createContext} from 'react';
import {Text, View, Image, StatusBar, Dimensions} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Button, Card, CheckBox} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
const Form3 = ({route}) => {
  const {id, calo, img, price, title} = route.params.item;
  RNBootSplash.hide({fade: true, duration: 10});
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [selectedIndex, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [money, setMoney] = useState(price);
  useEffect(() => {
    setCount(1);
    setIndex(0);
  }, [id]);
  useEffect(() => {
    switch (selectedIndex) {
      case 0:
        setMoney((count * price).toFixed(2));
        break;
      case 1:
        setMoney((count * (parseInt(price) + 1.12)).toFixed(2));
        break;
      case 2:
        setMoney((count * (parseInt(price) + 2.56)).toFixed(2));
        break;
      default:
        break;
    }
  }, [selectedIndex, count, price]);
  const handleAddToCard = () => {
    if (count > 0) {
      navigation.navigate('Cart', {img, money, count, title});
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 17,
            }}>
            <Ionicons
              style={{color: 'black'}}
              size={30}
              name="chevron-back-outline"
              onPress={() => navigation.navigate('form2')}
            />
            <FontAwesome
              style={{color: '#F68989'}}
              size={30}
              name="cart-plus"
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 21,
                color: 'black',
                textAlign: 'center',
                marginTop: 5,
              }}>
              {title}
            </Text>
            <Text style={{textAlign: 'center', marginTop: 6}}>
              $ {money >= 0 ? money : 0}
            </Text>
            <View
              style={{
                height: 300,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={{resizeMode: 'cover'}} source={img} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialIcons
                onPress={() => setCount(count => count - 1)}
                size={25}
                style={{color: '#F68989', textAlign: 'center'}}
                name="indeterminate-check-box"
              />
              <Text style={{marginHorizontal: 14}}>
                {count >= 0 ? count : 0}
              </Text>
              <MaterialIcons
                onPress={() => setCount(count => count + 1)}
                size={25}
                style={{color: '#F68989', textAlign: 'center'}}
                name="add-box"
              />
            </View>
            <Text style={{textAlign: 'center', marginTop: 6}}>
              $ {money >= 0 ? money : 0}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 26,
              }}>
              <View>
                <CheckBox
                  checked={selectedIndex === 0}
                  onPress={() => setIndex(0)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checkedColor="#F68989"
                />
                <Text style={{textAlign: 'center'}}>$ {price}</Text>
                <Text
                  style={{color: 'black', fontSize: 16, textAlign: 'center'}}>
                  8 inch
                </Text>
              </View>
              <View>
                <CheckBox
                  checked={selectedIndex === 1}
                  onPress={() => setIndex(1)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checkedColor="#F68989"
                />
                <Text style={{textAlign: 'center'}}>
                  $ {(parseInt(price) + 1.12).toFixed(2)}
                </Text>
                <Text
                  style={{color: 'black', fontSize: 16, textAlign: 'center'}}>
                  12 inch
                </Text>
              </View>
              <View>
                <CheckBox
                  checked={selectedIndex === 2}
                  onPress={() => setIndex(2)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checkedColor="#F68989"
                />

                <Text style={{textAlign: 'center'}}>
                  ${(parseInt(price) + 2.56).toFixed(2)}
                </Text>
                <Text
                  style={{color: 'black', fontSize: 16, textAlign: 'center'}}>
                  16 inch
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Button
                onPress={handleAddToCard}
                title="ADD TO CARD"
                buttonStyle={{
                  backgroundColor: '#F68989',
                  borderRadius: 12,
                  width: 310,
                  height: 53,
                  marginTop: 30,
                }}
              />
            </View>
          </View>
        </View>
        <Toast />
      </SafeAreaProvider>
    </>
  );
};
export default Form3;
