import React, { Component } from 'react';
import { View, Text , StyleSheet ,FlatList ,Dimensions ,Image} from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_CATEGORY_PLACES } from '../graphql/request';
import COLORS from '../consts/colors';
const {width} = Dimensions.get('screen');
import {BASE_URL} from '../config'


function PlaceCategory(){

    const {data,loading,error} = useQuery(GET_CATEGORY_PLACES);

    if (loading || error) return null;

    const CategoryCard = ({categoryPlace}) => (
        <View style={styles.iconContainer}>
          
          <Image style={styles.placeCardImage} source={{uri:BASE_URL+categoryPlace.categoryPlaceIcon}} height={18} width={18} style={{marginRight:5}}/>
          <Text style={{color: COLORS.primary,fontSize:12}}>{categoryPlace.categoryPlaceName}</Text>
        </View>
       )

    return(
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
              data={data.getCategoryPlace}
              renderItem={({item}) => <CategoryCard categoryPlace={item}/>}
              >

              </FlatList>  
         </View>
    )
}

export default PlaceCategory;

const styles =StyleSheet.create({
    
      placeCardImage:{
        width:width /2.5,
        height:140,
        borderRadius:10,
        margin:5

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
      }
      
})

