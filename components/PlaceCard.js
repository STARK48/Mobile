import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/colors';

const {width} = Dimensions.get('screen')


const PlaceCard = ({site,navigation}) => { return(
    <TouchableOpacity 
    onPress ={()=>navigation.navigate('DetailPlaceScreen',site)}
    >
        <View style={styles.place}>
          <Image style={styles.placeCardImage} source={site.coverImage}/>
          <View style={styles.placeDescription}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

              <View style={{flexDirection:'row'}}>
                  <Icon name="location-outline" size={20} color={COLORS.primary} />
                  <Text style={{marginLeft:5,color:COLORS.primary,fontWeight:'bold'}}>
                    {site.name}
                  </Text>
              </View>

              
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

            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <View >
                   
              </View>
              <View style={styles.addIcon}>
                    <Icon name='add-sharp' color={COLORS.white} size={15}></Icon>
                    <Text style={{color:COLORS.white}}>Add</Text>
              </View>
            </View>

            
            


          </View>
        </View>
    </TouchableOpacity>
  );}

export default PlaceCard



const styles = StyleSheet.create({
    place:{
        height:160,
        borderRadius:10,
        elevation:2,
        marginVertical:5,
        width:'100%',
        flexDirection:'row',
        backgroundColor:COLORS.white

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
        padding:5
      },
      addIcon: {
        borderWidth:0.3,
        backgroundColor: COLORS.primary,                
        alignItems: 'center',
        borderRadius: 5,
        flexDirection:'row',
        paddingHorizontal:12,
        paddingVertical:5,
        width:'35%',
        justifyContent:'space-between'

      }

}) 
