import React, { Component } from 'react'
import { Text, View ,StyleSheet ,ScrollView , StatusBar ,SafeAreaView , TouchableOpacity,Dimensions ,Image} from 'react-native';

import { Badge } from 'react-native-paper';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { grey100 } from 'react-native-paper/lib/typescript/styles/colors';
const {width} = Dimensions.get('screen');


const DetailOperatorScreen = ({navigation,route}) => {

    const operator = route.params;  
  
  
return(
    
<SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
    <StatusBar translucent={false} backgroundColor={COLORS.primary}></StatusBar>
        <View style={styles.stack}>
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
                <View style={styles.header}>
                    
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

                        <View style={styles.infoCont}>
                            <View style={styles.infoRow}>
                                <View style={styles.info}>
                                    <Icon name="mail-outline" color={COLORS.primary}  size={15} style={{marginRight:10}}/>
                                    <Text style={{color: COLORS.primary,fontSize:11}}>Facebook</Text>
                                </View>
                                <View style={styles.info}>
                                    <Icon name="logo-instagram" color={COLORS.primary}  size={15} style={{marginRight:10}}/>
                                    <Text style={{color: COLORS.primary,fontSize:11}}>Instagram nle ol</Text>
                                </View>
                            </View>

                            <View style={styles.infoRow}>
                                <View style={styles.info}>
                                    <Icon name="call-outline" color={COLORS.primary}  size={15} style={{marginRight:10}}/>
                                    <Text style={{color: COLORS.primary,fontSize:11}}>+261 34 54 891 06</Text>
                                </View>
                                <View style={styles.info}>
                                    <Icon name="ios-logo-whatsapp" color={COLORS.primary}  size={15} style={{marginRight:10}}/>
                                    <Text style={{color: COLORS.primary,fontSize:11}}>+261 34 54 891 06</Text>
                                </View>
                            </View>

                            <View style={styles.infoRow}>
                                <View style={styles.info}>
                                    <Icon name="logo-facebook" color={COLORS.primary}  size={15} style={{marginRight:10}}/>
                                    <Text style={{color: COLORS.primary,fontSize:11}}>Facebook</Text>
                                </View>
                                <View style={styles.info}>
                                    <Icon name="logo-chrome" color={COLORS.primary}  size={15} style={{marginRight:10}}/>
                                    <Text style={{color: COLORS.primary,fontSize:11}}>www.mysite.com</Text>
                                </View>
                            </View>

                            
                        </View>
                        
                    </View>
                </View>

          

          
        </ScrollView>
        
        
        
</SafeAreaView>
)
        }

export default DetailOperatorScreen;


const styles =StyleSheet.create({
    stack:{
      
      paddingVertical:10,
      paddingHorizontal:10,
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:COLORS.primary
    },
    header:{
            
        backgroundColor:COLORS.primary,
        height:120,
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
    padding:10,
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
  infoCont:{
    
    width:'100%',
    borderRadius:10,
    elevation:4,
    marginVertical:10,
    backgroundColor:COLORS.white,
    flexDirection:'column',
    alignItems:'center'
},
infoRow:{
    height:50,
    width:'95%',
    borderRadius:10,
    //elevation:4,
    marginVertical:5,
    marginHorizontal:5,
    backgroundColor:COLORS.white,
    flexDirection:'row',
    justifyContent: 'space-between',
},
info: {
    borderWidth:0.7,
    backgroundColor: COLORS.white,
    width:'45%',
    flexDirection: 'row',
    
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal:5,
    marginVertical:5,
    paddingHorizontal:15,
    padding:5,
  },
    
  
})
