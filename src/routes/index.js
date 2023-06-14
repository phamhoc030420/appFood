import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Form1 from '../component/form1';
import Form2 from '../component/fom2';
import Form3 from '../component/form3';
import TabButton from './tabButton';
import Form4 from '../component/form4';
import Search from '../component/search';
import Form5 from '../component/form5';
import Login from '../component/authen/login';
const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="form1" component={Form1} />
        <Stack.Screen name="form2" component={Form2} />
        <Stack.Screen name="Home" component={TabButton} />
        <Stack.Screen name="form3" component={Form3} />
        <Stack.Screen name="Cart" component={Form4} />
        <Stack.Screen name="form5" component={Form5} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;
