import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { useRoute } from '@react-navigation/native';
// import IonicIcons from 'react-native-vector-icons/Ionicons'
// import SignIn from '../component/signin'
import SignUp from '../component/signup'
import Home from '../component/Home'
import IonicIcons from 'react-native-vector-icons/Ionicons'
// import Splash from '../component/splashScreen'
import About from '../component/about';
import Slider from '../component/slider';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function Navigation2() {
  return (

  )
}


  const IconContainer = props =>{
      return <IonicIcons name={props.name} size={20} color={"white"}/>
  }