import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'



import MainScreen from './MainScreen';
import { DrawerContent } from './DrawerContent';



import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import OnBoardScreen from './OnBoardScreen';
import DetailPlaceScreen from './DetailPlaceScreen';
import DetailOperatorScreen from './DetailOperatorScreen';
import DetailPostScreen from './DetailPostScreen';


const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="OnBoardScreen" component={OnBoardScreen}/>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="MasterScreen" component={MasterScreen}/>
        <RootStack.Screen name="DetailPlaceScreen" component={DetailPlaceScreen}/>
        <RootStack.Screen name="DetailOperatorScreen" component={DetailOperatorScreen}/>
        <RootStack.Screen name="DetailPostScreen" component={DetailPostScreen}/>
        
        
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

