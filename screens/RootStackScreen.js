import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'


import MainScreen from './MainScreen';
import { DrawerContent } from './DrawerContent';



import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';


const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="MasterScreen" component={MasterScreen}/>
    </RootStack.Navigator>
);



const MasterScreen = () =>{
    return (
  
    
        <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>} initialRouteName="Home">
          <Drawer.Screen name="Home" component={MainScreen} />        
        </Drawer.Navigator>
        
    );
  }

export default RootStackScreen;

