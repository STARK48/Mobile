import React, { Component } from 'react'
import { Text, View ,StyleSheet, Image ,Dimensions, TouchableOpacity } from 'react-native';

import COLORS from '../consts/colors';

import Icon from 'react-native-vector-icons/Ionicons';
import { white } from 'react-native-paper/lib/typescript/styles/colors';


const {width} = Dimensions.get('screen');




const OperatorCard = ({navigation,operator}) =>(
    
  <TouchableOpacity
  activeOpacity={0.8}
  onPress={()=>navigation.navigate('DetailOperatorScreen',operator)}
  >
    <View style={styles.operatorCard} >
     <View style={{borderTopLeftRadius:10,
     borderTopRightRadius:10}}>
       <Image style={styles.top} source={operator.profileImage}></Image>
     </View>

     <View style={styles.bottom}>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         
         <Text style={{color:COLORS.white,fontWeight:'bold'}}>{operator.name}</Text>
       </View>

       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Icon name={operator.categoryIcon} color={COLORS.white}  size={18} style={{marginRight:5}}/>
         <Text style={{color:COLORS.white,fontSize:12}}>{operator.category}</Text>
       </View>
     </View>
     
     
   </View>
  </TouchableOpacity>
 )

export default OperatorCard;


const styles = StyleSheet.create({
    
    operatorCard:{
      height:150,
      width:width /2,
      marginRight: 20,
      padding: 10,
      overflow: 'hidden',
      backgroundColor:COLORS.white
      
    },
    top:{
      height:80,
      width:width /2.1,
      borderTopLeftRadius:8,
      borderTopRightRadius:8

    },
    bottom:{
      height:60,
      color:COLORS.white,
      width:width /2.1,
      backgroundColor:COLORS.primary,
      borderBottomLeftRadius:8,
      borderBottomRightRadius:8,
      alignItems:'center',
      justifyContent:'center'
      
    }
})
