import React, { Component } from 'react'
import { Text, View ,StyleSheet ,ScrollView , StatusBar ,SafeAreaView ,TextInput, FlatList} from 'react-native'


import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/colors';

import categorySite from '../consts/categorySite';


const PlacesScreen = ({navigation}) =>{

  const categoryIcons = [
    <Icon name="airplane-outline" size={25} color={COLORS.primary}></Icon>,
    <Icon name="umbrella-outline" size={25} color={COLORS.primary}></Icon>,
    <Icon name="compass-outline" size={25} color={COLORS.primary}></Icon>,
    <Icon name="location-outline" size={25} color={COLORS.primary}></Icon>,
    <Icon name="hourglass" size={25} color={COLORS.primary}></Icon>,
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

   const CategoryCard = ({categorySite}) => (
    <View style={styles.iconContainer}>
      <Icon name={categorySite.categoryIcon} color={COLORS.primary}  size={18} style={{marginRight:5}}/>
      <Text style={{color: COLORS.primary,fontSize:12}}>{categorySite.categoryName}</Text>
    </View>
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

        
              <View style={styles.inputContainer}>
                <Icon name="search" size={28}></Icon>
                <TextInput placeholder="Search a place" style={{color:COLORS.grey}}></TextInput>
              </View>
          

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
            height:40,
            //paddingHorizontal:20
          }}
          >
          <FlatList
          //contentContainerStyle={{paddingLeft:20}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categorySite}
          renderItem={({item}) => <CategoryCard categorySite={item}/>}
          >

          </FlatList>  
          </View>

          

          
          
          

          
          
        </ScrollView>
</SafeAreaView>
)
        }


export default PlacesScreen;


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
        fontSize:23,
        marginBottom:20
      },
      inputContainer:{
        height:40,
        width:'70%',
        backgroundColor:COLORS.white,
        borderRadius:10,
        position:'absolute',
        marginHorizontal:'15%',
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        elevation:12,
        top:10 
      },
      sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
      },
      categoryContainer: {
        //marginTop: 40,
        //marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      iconContainer: {
        height: 30,
        //width: 50,
        backgroundColor: COLORS.secondary,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal:5,
        paddingHorizontal:5,
      },
})
