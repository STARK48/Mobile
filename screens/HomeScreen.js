import React, { Component } from 'react'
import { 
  Text, 
  View,StatusBar, ScrollView, StyleSheet, TextInput, ImageBackground, FlatList, Dimensions, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { color } from 'react-native-reanimated';
const {width} = Dimensions.get('screen');

import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/colors';
import places from '../consts/places';
import operators from '../consts/operators';


//import OperatorCard from '../components/operatorCard'





const HomeScreen = ({navigation}) =>{

  const categoryIcons = [
    <Icon name="airplane-outline" size={25} color={COLORS.primary}></Icon>,
    <Icon name="umbrella-outline" size={25} color={COLORS.primary}></Icon>,
    <Icon name="compass-outline" size={25} color={COLORS.primary}></Icon>,
    <Icon name="location-outline" size={25} color={COLORS.primary}></Icon>,
  ]

   const ListCategory = () => (
     <View style={styles.categoryContainer}>
        {categoryIcons.map((icon,index) =>(
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
     </View>
   );

   const Card = ({place}) => (

    <TouchableOpacity
    activeOpacity={0.8}
    onPress={()=>navigation.navigate('DetailPlaceScreen',place)}
    >
     <ImageBackground style={styles.cardImage} source={place.image}>
       <Text
        style={{
          color:COLORS.white,
          fontSize:20,
          fontWeight:'bold',
          marginTop:10,
        }}
       >
         {place.name}
       </Text>
       <View
       style={{
         flex:1, 
         justifyContent:'space-between',        
         flexDirection:'row',
         alignItems:'flex-end'
       }}
       >
         <View style={{flexDirection:'row'}}>
            <Icon name="location-outline" size={20} color={COLORS.white} />
            <Text style={{marginLeft:5,color:COLORS.white}}>
              {place.location}
            </Text>
         </View>
         <View style={{flexDirection:'row'}}>
            <Icon name="star-outline" size={20} color={COLORS.white} />
            <Text style={{marginLeft:5,color:COLORS.white}}>
              5.0
            </Text>
         </View>

         

       </View>
     </ImageBackground>
    </TouchableOpacity>
   );

   const RecomandedCard = ({place}) =>(
     <ImageBackground style={styles.rmCardImage} source={place.image}>
       
       <View 
       style={{flex:1,justifyContent:"space-between",
       alignItems:'flex-end'
       }}>
         <View style={{width:'100%',flexDirection:'row',marginTop:10}}>
          <View style={{flexDirection:'row'}}> 
              
          </View>
          <View style={{flexDirection:'row',marginLeft:10}}> 
              
          </View>
        </View>

         <View 
         style={{width:'100%',flexDirection:'column',backgroundColor:'rgba(0,0,0,0.6)',padding: 10}}>
          <View style={{flexDirection:'row'}}> 
              <Icon name="location-outline" size={22} color={COLORS.white} />
              <Text style={{marginLeft:5,color:COLORS.white,fontWeight:'bold',fontSize:22}}>
                {place.location}
              </Text>
          </View>
          <View style={{flexDirection:'row',marginLeft:10}}> 
              
              <Text style={{fontSize:11,color:COLORS.white}}>
                {place.details}
              </Text>
          </View>
         </View>

         

         
       </View>
     </ImageBackground>
   )


   const OperatorCard = ({operator}) =>(
    
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


   

    return(

      
      <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
        <StatusBar translucent={false} backgroundColor={COLORS.primary}></StatusBar>
        <View style={styles.header}>
          <Icon.Button
            name="ios-menu" size={25}
            backgroundColor={COLORS.primary}
            onPress={() => navigation.openDrawer()}
            >
          </Icon.Button>

          <Icon.Button
            name="md-notifications-outline" size={25}
            backgroundColor={COLORS.primary}
            onPress={() => navigation.openDrawer()}
            >
          </Icon.Button>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View 
          style={{
            backgroundColor:COLORS.primary,
            height:120,
            paddingHorizontal:20
          }}
          >
            <View>
              <Text style={styles.headerTitle}>Explore the</Text>
              <Text style={styles.headerTitle}>beautiful places</Text>
              <View style={styles.inputContainer}>
                <Icon name="search" size={28}></Icon>
                <TextInput placeholder="Search place" style={{color:COLORS.grey}}></TextInput>
              </View>
            </View>  
          </View>
          <ListCategory></ListCategory>
          <Text style={styles.sectionTitle}>Places</Text>
          <View>
            <FlatList  
              contentContainerStyle={{paddingLeft:20}}
              horizontal
              showsVerticalScrollIndicator={false}
              data={places}
              renderItem={({item}) => <Card place={item}/>}
            />
            
          
          <Text style={styles.sectionTitle}>Recomanded</Text>
          
            <FlatList  
              snapToInterval={width -20}
              contentContainerStyle={{paddingLeft:20,paddingBottom:20,marginBottom:20}}
              horizontal
              showsVerticalScrollIndicator={false}
              data={places}
              renderItem={({item}) => <RecomandedCard place={item}/>}
            />

          <Text style={styles.sectionTitle}>Operators</Text>
          
          <FlatList  
            snapToInterval={width -20}
            contentContainerStyle={{paddingLeft:20,paddingBottom:20,marginBottom:20}}
            horizontal
            showsVerticalScrollIndicator={false}
            data={operators}
            renderItem={({item}) => <OperatorCard operator={item}/>}
          />
            
          </View>

          
          
        </ScrollView>
      </SafeAreaView>
    );
  };
  

  const styles =StyleSheet.create({
    header:{
      //marginTop:5,
      paddingVertical:10,
      paddingHorizontal:10,
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:COLORS.primary
    },
    headerTitle:{
      color:COLORS.white,
      fontWeight:'bold',
      fontSize:23
    },
    inputContainer:{
      height:50,
      width:'100%',
      backgroundColor:COLORS.white,
      borderRadius:10,
      position:'absolute',
      top:90,
      flexDirection:'row',
      paddingHorizontal:20,
      alignItems:'center',
      elevation:12 
    },
    categoryContainer: {
      marginTop: 40,
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconContainer: {
      height: 50,
      width: 70,
      backgroundColor: COLORS.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    sectionTitle: {
      marginHorizontal: 20,
      marginVertical: 20,
      fontWeight: 'bold',
      fontSize: 20,
    },
    cardImage: {
      height: 220,
      width: width / 2,
      marginRight: 20,
      padding: 10,
      overflow: 'hidden',
      borderRadius: 10,
    },
    rmCardImage: {
      width: width - 40,
      height: 200,
      marginRight: 20,
      borderRadius: 10,
      overflow: 'hidden',
      //padding: 10,
    },
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
      height:40,
      color:COLORS.white,
      width:width /2.1,
      backgroundColor:COLORS.primary,
      borderBottomLeftRadius:8,
      borderBottomRightRadius:8,
      alignItems:'center',
      justifyContent:'center'
      
    }
  })

export default HomeScreen
