import React, { Component } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import COLORS from '../consts/colors';

import Icon from 'react-native-vector-icons/Ionicons';


const DetailPlaceScreen = ({navigation,route}) =>{
  const place = route.params;
    return(
      <SafeAreaView 
      style={{
        flex:1,
        backgroundColor:COLORS.white
      }} 
      >
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)"></StatusBar>
        <ImageBackground style={{flex:0.7}} source={place.image}>
          <View style={styles.header}>
            <Icon name="ios-arrow-back-outline" size={28} color={COLORS.white} onPress={()=>navigation.goBack()}></Icon>
          </View>
          <View style={styles.imageDetails}>
            <Text
              style={{
                width:'70%',
                fontSize:30,
                fontWeight:'bold',
                color:COLORS.white,
                marginBottom:20
              }}
            >
              {place.name}
            </Text>
            <View style={{flexDirection:'row'}}>
              <Icon name="star" size={20} color={COLORS.orange}/>
              <Text style={{color:COLORS.white,fontWeight:'bold',fontSize:20}}>5.0</Text>

            </View>
          </View>
        </ImageBackground>
        <View style={styles.detailsConaitiner}>
          <View style={styles.iconContainer}>
            <Icon name="heart" size={25} color={COLORS.red}></Icon>
          </View>

          <View style={{flexDirection:'row',marginTop:10}}>
            <Icon name="location-outline" size={25} color={COLORS.primary}></Icon>
            <Text style={{color:COLORS.primary,fontSize:20,fontWeight:'bold',marginLeft:5}}>{place.location}</Text>
          </View>
          <Text style={{marginTop:20,fontWeight:'bold',fontSize:20}}>About the trip</Text>
          <Text style={{marginTop:20,lineHeight:22}}>{place.details}</Text>
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
      iconContainer:{
        height:50,
        width:50,
        position:"absolute",
        top:-25,
        backgroundColor:COLORS.white,
        borderRadius:30,
        right:20,
        elevation:20,
        justifyContent:"center",
        alignItems:"center"
      },
      detailsConaitiner:{
      top:-30,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingVertical:40,
      paddingHorizontal:20,
      backgroundColor:COLORS.white,
      flex:0.3,
    },
    header:{
      marginTop:60,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:20,
      
    },
    imageDetails:{
      padding: 20,
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      position:'absolute',
      bottom:30
    }
  })

export default DetailPlaceScreen
