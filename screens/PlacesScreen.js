import React, { Component } from 'react'
import { Text, View ,StyleSheet ,ScrollView , StatusBar ,SafeAreaView ,TextInput, FlatList,Image,Dimensions, TouchableOpacity} from 'react-native'


import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/colors';

import categorySite from '../consts/categorySite';
import sites from '../consts/sites';

const {width} = Dimensions.get('screen')

const PlacesScreen = ({navigation}) =>{

  const PlaceCard = ({site}) =>(
    <TouchableOpacity 
    onPress ={()=>navigation.navigate('DetailPlaceScreen',site)}
    >
        <View style={styles.place}>
          <Image style={styles.placeCardImage} source={site.coverImage}/>
          <View style={styles.placeDescription}>
            <View style={{flexDirection:'row'}}>
                <Icon name="location-outline" size={20} color={COLORS.primary} />
                <Text style={{marginLeft:5,color:COLORS.primary,fontWeight:'bold'}}>
                  {site.name}
                </Text>
            </View>
            

            <View style={{flexDirection:'row'}}>
              <View style={styles.placeDescriptionIcon}>
                <Icon name={site.categoryIcon} color={COLORS.primary}  size={15} style={{marginRight:4}}/>
                <Text style={{color: COLORS.primary,fontSize:11}}>{site.categoryName}</Text>
              </View>

              <View style={styles.placeDescriptionIcon}>
                <Icon name='ios-compass-outline' color={COLORS.primary}  size={15} style={{marginRight:4}}/>
                <Text style={{color: COLORS.primary,fontSize:11}}>{site.region}</Text>
              </View>
            </View>


            <View style={styles.detail}>
            <Text numberOfLines={3} style={{fontSize:11}} >{site.description}</Text>
            </View>

            
            


          </View>
        </View>
    </TouchableOpacity>
  )

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
              
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categorySite}
              renderItem={({item}) => <CategoryCard categorySite={item}/>}
              >

              </FlatList>  
          </View>

          <View style={styles.contPlaces}>
              {sites.map((item) => {
                return(<PlaceCard site={item}/>)                
              })}              
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
      contPlaces:{
        marginHorizontal:10,
        flexDirection:'column',
        marginVertical:10
      },
      place:{
        height:150,
        borderRadius:10,
        elevation:2,
        marginVertical:5,
        width:'100%',
        flexDirection:'row'

      },
      placeCardImage:{
        width:width /2.5,
        height:140,
        borderRadius:10,
        margin:5

      },
      placeDescription:{
        paddingVertical:10
      },
      placeDescriptionIcon: {
        borderWidth:0.3,
        backgroundColor: COLORS.white,
        
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal:5,
        marginVertical:5,
        padding:5,
      },
      detail:{
        width:width /2,
        padding:10
      }
})
