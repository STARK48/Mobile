import React, { Component } from 'react'
import { Text, View ,StyleSheet ,ScrollView , StatusBar ,SafeAreaView , TouchableOpacity ,Image} from 'react-native'


import { Badge } from 'react-native-paper';

import LinearGradient from 'react-native-linear-gradient';

import PlaceCard from '../components/PlaceCard';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/colors';
import sites from '../consts/sites';



const CircuitScreen = ({navigation}) => {

  
  
  
return(
    
<SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
    <StatusBar translucent={false} backgroundColor={COLORS.primary}></StatusBar>
        <View style={styles.header}>
        <View style={{marginHorizontal:10,marginTop:10,flexDirection:'row'}}>
            <Icon name="ios-arrow-back-outline" size={28} color={COLORS.white} onPress={()=>navigation.goBack()}></Icon>
          </View>

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View style={{marginHorizontal:10,marginTop:10,flexDirection:'row'}}>
              
              <Image style={{height:25,width:25}} source={require('../assets/circuit.png')}/>
              <Badge size={18}>3</Badge>
            </View>
          </TouchableOpacity>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View 
          style={{
            backgroundColor:COLORS.primary,
            height:80,
            paddingHorizontal:20
          }}
          >
            
          </View>

          <View style={styles.contPlaces}>
            
              {sites.map((item) => {
                return(<PlaceCard site={item} navigation={navigation} />)                
              })}              
          </View>

          
        </ScrollView>
        <View style={styles.buttonButon}>
          <TouchableOpacity
                      style={styles.signIn}
                      onPress={() => navigation.navigate('MasterScreen')}
                  >
                  <LinearGradient
                      colors={[COLORS.primary, COLORS.primary]}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Book Now</Text>
                  </LinearGradient>
          </TouchableOpacity>
        </View>
        
        
</SafeAreaView>
)
        }

export default CircuitScreen;


const styles =StyleSheet.create({
    header:{
      
      paddingVertical:10,
      paddingHorizontal:10,
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:COLORS.primary
    },
    eventContainer:{
      marginHorizontal:20,
      alignItems:'center',
      top:-70
  },

  contPlaces:{
    top:-70,
    marginHorizontal:10,
    flexDirection:'column',
    marginVertical:10,
    
  },
  signIn: {
    //backgroundColor:'rgba(0,0,0,0.1)',
    
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
    
},
buttonButon:{  
  paddingHorizontal:10,
  bottom:10
  //backgroundColor:COLORS.primary
}
  
})
