import React, {useEffect, useState, createContext, useRef} from 'react';
import {Text, View, Image, StatusBar, Dimensions, FlatList} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Button, Card} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {data, dataItalia, dataSea, dataJapan} from './data';
const CardFood = ({flag}) => {
  RNBootSplash.hide({fade: true, duration: 10});
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const listRef = useRef(null);
  useEffect(() => {
    listRef.current.scrollToIndex({index: 0});
  });
  const handleAddCart = item => {
    navigation.navigate('form3', {item});
  };
  return (
    <>
      <FlatList
        ref={listRef}
        initialScrollIndex={0}
        data={
          flag === 0
            ? data
            : flag === 1
            ? dataItalia
            : flag === 2
            ? dataJapan
            : flag === 3
            ? dataSea
            : data
        }
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <>
            <Card
              containerStyle={{
                height: 272,
                width: (windowWidth - 60) / 2,
                borderRadius: 15,
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>{item.title}</Text>
              <Text style={{color: '#F68989', textAlign: 'center'}}>
                {item.calo}
              </Text>
              <Image style={{width: 145, height: 142}} source={item.img} />
              <View style={{position: 'absolute', left: '37.5%', top: 200}}>
                <Text style={{textAlign: 'center'}}>$ {item.price}</Text>
                <MaterialIcons
                  onPress={() => handleAddCart(item)}
                  size={20}
                  style={{color: '#F68989', textAlign: 'center'}}
                  name="add-box"
                />
              </View>
            </Card>
          </>
        )}
      />
    </>
  );
};
export default CardFood;
