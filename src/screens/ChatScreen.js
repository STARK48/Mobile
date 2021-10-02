import React, { Component } from 'react'
import { Text, View ,SafeAreaView,StatusBar,StyleSheet,Dimensions, ImageBackground ,Image} from 'react-native'
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { grey100 } from 'react-native-paper/lib/typescript/styles/colors';
const {width} = Dimensions.get('screen');

const ChatScreen = ({navigation})=> {   
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
                            <Image style={styles.pdpImage} source={require('../assets/Cotisse-logo.png')} />
                        </View>
                        <Text style={{fontSize:30,top:-70}}>Travel Agency</Text>
                        <View style={styles.contOptions}>
                            <View style={styles.contIcon}>
                                <Icon name="md-options-outline" size={25} color={COLORS.primary} />
                                <Text>Guide</Text>
                            </View>

                            <View style={styles.contIcon}>
                                <Icon name="md-star-outline" size={25} color={COLORS.primary}  />
                                <Text>Pro</Text>
                            </View>

                            <View style={styles.contIcon}>
                                <Icon name="image-outline" size={25} color={COLORS.primary} />
                                <Text style={{marginTop:10}}>15</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal:30,justifyContent:"center",alignItems:"center",top:-40}}>
                            <Text style={{marginTop:20,lineHeight:22,color:'grey'}}>Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.</Text>
                        </View>
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
        
        borderRadius:40,
        top:-80,
        padding:5,
        borderWidth:0.3,        
        borderColor:COLORS.primary
        
      },
      pdpImage:{
        flex:1,
        width:width / 2.5,
        borderRadius:40,
       
        
        
        
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
      }

})

export default ChatScreen
