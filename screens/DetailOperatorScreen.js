import React, { Component } from 'react'
import { Text, View ,SafeAreaView,StatusBar,StyleSheet,Dimensions, ImageBackground ,Image} from 'react-native'
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { grey100 } from 'react-native-paper/lib/typescript/styles/colors';
const {width} = Dimensions.get('screen');

const DetailOperatorScreen = ({navigation,route})=> { 
    const operator = route.params;  
        return (
            <SafeAreaView 
            style={{
              flex:1,
              backgroundColor:COLORS.white
            }} >
                <StatusBar translucent backgroundColor="rgba(0,0,0,0)"></StatusBar>
                <View style={styles.header}>
                    <Icon name="ios-arrow-back-outline" size={28} style={{marginTop:40,position:"absolute",marginHorizontal:20}} color={COLORS.white} onPress={()=>navigation.goBack()}></Icon>
                </View>
                <View style={styles.footer}>
                    <View style={styles.inside}>
                        <View style={styles.pdp}>
                            <Image style={styles.pdpImage} source={operator.profileImage} />
                        </View>
                        <Text style={{fontSize:30,top:-70}}>{operator.name}</Text>
                        <View style={styles.contOptions}>
                            <View style={styles.contIcon}>
                                <Icon name={operator.categoryIcon} size={25} color={COLORS.primary} />
                                <Text>{operator.category}</Text>
                            </View>

                            <View style={styles.contIcon}>
                                <Icon name="md-star-outline" size={25} color={COLORS.primary}  />
                                <Text>Pro</Text>
                            </View>

                            <View style={styles.contIcon}>
                                <Icon name="image-outline" size={25} color={COLORS.primary} />
                                <Text style={{marginTop:10}}> 15 </Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:30,justifyContent:"center",alignItems:"center",top:-40}}>
                            <Text style={{marginTop:20,lineHeight:22,color:'grey'}}>{operator.about}</Text>
                        </View>

                        <View style={styles.post}></View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }


const styles = StyleSheet.create({
    header:{
            
            backgroundColor:COLORS.primary,
            height:200,
            paddingHorizontal:20,
            borderBottomLeftRadius:75
    },
    footer:{
    
      flex:0.7,
      backgroundColor:COLORS.primary,
      width:width,
      
    },
    inside:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:20,
        width:width,
        borderTopRightRadius:75,
        //justifyContent:'center',
        alignItems:'center'
        
      },
      pdp:{
        height:130,
        backgroundColor:COLORS.white,        
        
        borderRadius:35,
        top:-80,
        padding:5,
        borderWidth:0.3,        
        borderColor:COLORS.primary
        
      },
      pdpImage:{
        flex:1,
        width:width / 2.5,
        borderRadius:30,
       
        
        
        
      },
      contOptions:{
        justifyContent:'space-between',        
        flexDirection:"row",
        top:-40
        
      },
      contIcon:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:"column",
        marginHorizontal: 20,
      },
      post:{
        height:250,
        width:'100%',
        borderRadius:10,
        elevation:4,
        marginVertical:10,
        backgroundColor:COLORS.white
    }

})

export default DetailOperatorScreen
