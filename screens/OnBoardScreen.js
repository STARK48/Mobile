import React, { Component } from 'react'
import { ImageBackground, StatusBar, Text, View ,StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../consts/colors'

const OnBoardScreen = ({navigation}) => (
    <View style={{flex:1}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)"></StatusBar>
        <ImageBackground
        style={{flex:1}}
        source={require('../assets/onboardImage.jpg')}
         >
             <View style={styles.details}>
                 <Text style={{color:COLORS.white,fontSize:25,fontWeight:'bold',marginTop:15}}>Discover</Text>
             
                 <Text style={{color:COLORS.white,fontSize:25,fontWeight:'bold'}}>Madagascar with Us</Text>
                 <Text style={{color:COLORS.white,lineHeight:25,marginTop:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>

                <TouchableOpacity onPress={()=>navigation.navigate("SignInScreen")}>
                        <View style={styles.btn}>
                            <Text style={{fontWeight:'bold',marginLeft:20}}>
                                Get Started
                            </Text>
                        </View>
                </TouchableOpacity>
                 
             </View>

             
        </ImageBackground>
    </View>
);


const styles = StyleSheet.create({
    details:{
        height:'60%',
        bottom:0,
        position:'absolute',
        paddingHorizontal:40,
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        marginHorizontal:20,
        marginVertical:20,
        borderRadius:20
    },
    btn:{
        height:50,
        width:120,
        backgroundColor:COLORS.white,
        marginTop:20,
        borderRadius:7,
        justifyContent:'center'
    }
})

export default OnBoardScreen
