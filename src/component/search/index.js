import React, {useEffect, useState, createContext} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Card} from '@rneui/themed';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {dataSearch} from './data';
const Search = () => {
  const [click, setClick] = useState(0);
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const componentCard = item => {
    return (
      <View>
        <Card
          containerStyle={{
            width: windowWidth / 2 - 30,
            height: 240,
            borderRadius: 30,
            backgroundColor: '#302F3C',
          }}>
          <View
            style={{
              alignItems: 'center',
              height: 141,
              top: item.id == 3 || item.id === 4 ? -35 : 0,
            }}>
            <Image
              style={{height: '100%', resizeMode: 'cover'}}
              source={item.image}
            />
          </View>
          <View style={{marginTop: -30}}>
            <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
              {item.title}
            </Text>
            <Text style={{color: 'white', fontSize: 8, textAlign: 'center'}}>
              {item.text}
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Button type="outline" radius={10} title={'$ ' + item.price} />
          </View>
        </Card>
      </View>
    );
  };
  return (
    <>
      <SafeAreaProvider style={{flex: 1}}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />

        <View
          style={{
            flex: 1,
            height: '100%',
            position: 'relative',
            backgroundColor: '#ffff',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{width: 414, height: 293}}
              source={require('../../image/new1.png')}
            />
            <View
              onTouchStart={() => navigation.goBack()}
              style={{
                position: 'absolute',
                width: 55,
                height: 55,
                borderRadius: 19,
                backgroundColor: '#ffff',
                zIndex: 1,
                top: 52,
                left: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons style={{color: 'black'}} size={24} name="arrow-back" />
            </View>
            <View
              style={{
                width: 334,
                height: 181,
                backgroundColor: '#FAFAFA',
                position: 'absolute',
                top: 200,
                borderRadius: 25,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  marginTop: 64,
                  fontSize: 32,
                  fontWeight: 900,
                }}>
                Chillox Burger
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={require('../../image/new11.png')} />
                  <Text style={{marginLeft: 5}}>Free</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 50}}>
                  <Image source={require('../../image/new12.png')} />
                  <Text style={{marginLeft: 5}}>10-20 min</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 50}}>
                  <Image source={require('../../image/new13.png')} />
                  <Text style={{marginLeft: 5}}>4.8</Text>
                </View>
              </View>
            </View>
            <Image
              style={{
                width: 137,
                height: 137,
                position: 'absolute',
                top: 147,
              }}
              source={require('../../image/new2.png')}
            />
          </View>
          <View style={{marginTop: 115}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 30,
              }}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: 900}}>
                Menu
              </Text>
              <AntDesign size={18} name="search1" />
            </View>
            <View style={{marginTop: 20, marginHorizontal: 20}}>
              <FlatList
                data={['Popular', 'Bergers', 'French Fry', 'Chicken']}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => (
                  <>
                    <View
                      onTouchStart={() => setClick(index)}
                      style={{
                        width: 96,
                        height: 43,
                        backgroundColor:
                          index === click ? '#F68989' : '#DEE1E6',
                        borderRadius: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 10,
                      }}>
                      <Text style={{color: 'black'}}>{item}</Text>
                    </View>
                  </>
                )}
              />
            </View>
            <View style={{marginTop: 30}}>
              {/* Card */}
              <FlatList
                data={dataSearch}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({item, index}) => componentCard(item)}
                keyExtractor={(item, index) => index}
              />
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Search;
