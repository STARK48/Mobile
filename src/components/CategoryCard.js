import React, { Component } from 'react';
import { View, Text ,Icon ,StyleSheet} from 'react-native';
import COLORS from '../consts/colors';

const CategoryCard = ({categorySite}) => {
  
    return (
    <View style={styles.iconContainer}>
        <Icon name={categorySite.categoryIcon} color={COLORS.primary}  size={18} style={{marginRight:5}}/>
        <Text style={{color: COLORS.primary,fontSize:12}}>{categorySite.categoryName}</Text>
      </View>
    );
  
}

export default CategoryCard;

const styles =StyleSheet.create({
    
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
