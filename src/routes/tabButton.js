import React, {useContext, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MenuProvider} from 'react-native-popup-menu';
const Tab = createBottomTabNavigator();
import Form1 from '../component/form1';
import Form2 from '../component/fom2';
import Form3 from '../component/form3';
import {View} from 'react-native';
const TabButton = () => {
  const colorText = 'black';
  return (
    <MenuProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#DEE1E6',
            position: 'absolute',
            bottom: 15,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            shadowColor: 'yelow',
            shadowOffset: {
              width: 10,
              height: 20,
            },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 2,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="form1"
          component={Form1}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={30}
                color={colorText}
              />
            ),
          }}
        />
        <Tab.Screen
          name="form2"
          component={Form2}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: '#F68989',
                  justifyContent: 'center',
                  bottom: 20,
                }}>
                <Ionicons
                  name={focused ? 'add' : 'ios-add'}
                  size={30}
                  color="white"
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="forms"
          component={Form2}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'cart' : 'cart-outline'}
                size={30}
                color={colorText}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </MenuProvider>
  );
};
export default TabButton;
