import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View ,SafeAreaView, StyleSheet,Button} from 'react-native'


import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import { DrawerContent } from './screens/DrawerContent';
import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();



const App = () =>{
  return (

  <NavigationContainer>
      {/* <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>} initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainScreen} />        
      </Drawer.Navigator> */}
      <RootStackScreen/>
    </NavigationContainer>);
}

export default App
