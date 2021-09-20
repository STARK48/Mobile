import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, StatusBar,TouchableOpacity ,Image, Dimensions} from 'react-native';
import { Badge } from 'react-native-paper';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('screen');


const ControlPannelScreen = ({navigation}) => {
    return (
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

        <View 
          style={{
            backgroundColor:COLORS.primary,
            height:80,
            paddingHorizontal:20
          }}
          >
            
        </View>

        <View style={styles.pannelCont}>            
            <View style={styles.pannelRow}>
                <View style={styles.pannel}>
                    <Text style={{color:COLORS.primary}}>New Post</Text>
                    <Icon name="paper-plane-outline" size={40} color={COLORS.primary}></Icon>
                </View>
                <View style={styles.pannel}>
                    <Text style={{color:COLORS.primary}}>New place</Text>
                    <Icon name="location" size={40} color={COLORS.red}></Icon>
                </View>
            </View>
            <View style={styles.pannelRow}>
                <View style={styles.pannel}>
                    <Text style={{color:COLORS.primary}}>Add an Event</Text>
                    <Icon name="md-calendar-outline" size={40} color={COLORS.dark}></Icon>
                </View>
                <View style={styles.pannel}>
                    <Text style={{color:COLORS.primary}}>New circuit</Text>
                    <Image  style={{height:40,width:40}} source={require('../assets/darkCircuit.png')}/>
                </View>
            </View>
            <View style={styles.pannelRow}>
                <View style={styles.pannel}></View>
                <View style={styles.pannel}></View>
            </View>
        </View>

          
      </SafeAreaView>
    );
};

export default ControlPannelScreen;

const styles = StyleSheet.create({
    header:{      
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:COLORS.primary
      },
      pannelCont:{    
        width:'95%',        
        borderRadius:10,
        elevation:1,
        marginVertical:10,
        marginHorizontal:10,
        backgroundColor:COLORS.white,
        flexDirection:'column',
        alignItems:'center',
        top:-70,
        backgroundColor:'rgba(0,0,0,0.1)',        
        justifyContent:'space-between',
        //padding:5
    },
    pannelRow:{    
       flexDirection:'row',
       marginVertical:10        
    },
    pannel:{    
        width:width / 2.5,
        height:100,
        borderRadius:10,
        elevation:2,        
        backgroundColor:COLORS.white,
        flexDirection:'column',
        alignItems:'center',
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15
        
    },
});
