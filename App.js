import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View ,SafeAreaView, StyleSheet,Button} from 'react-native'


import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import { DrawerContent } from './screens/DrawerContent';
import RootStackScreen from './screens/RootStackScreen';
import DetailPlaceScreen from './screens/DetailPlaceScreen';
import DetailOperatorScreen from './screens/DetailOperatorScreen';
import CircuitScreen from './screens/CircuitScreen';
import DetailPostScreen from './screens/DetailPostScreen';
import DetailEventScreen from './screens/DetailEventScreen';
import ControlPannelScreen from './screens/ControlPannelScreen';
import NotificationsScreen from './screens/NotificationsScreen';



const Drawer = createDrawerNavigator();



const App = () =>{
  return (

  <NavigationContainer>
      <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>} initialRouteName="Home">
        <Drawer.Screen name="HomeDrawer" component={MainScreen} />           
        <Drawer.Screen name="DetailPlaceScreen" component={DetailPlaceScreen} />         
        <Drawer.Screen name="DetailOperatorScreen" component={DetailOperatorScreen} />  
        <Drawer.Screen name="DetailEventScreen " component={DetailEventScreen } /> 
        <Drawer.Screen name="CircuitScreen" component={CircuitScreen} />   
        <Drawer.Screen name="DetailPostScreen" component={DetailPostScreen} />   
        <Drawer.Screen name="ControlPannel" component={ControlPannelScreen} /> 
        <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />    
      </Drawer.Navigator>
      {/* <RootStackScreen/> */}
  </NavigationContainer>);
}

export default App
