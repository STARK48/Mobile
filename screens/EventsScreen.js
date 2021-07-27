import React, { Component } from 'react'
import { Text, View ,StyleSheet ,ScrollView , StatusBar ,SafeAreaView ,TextInput} from 'react-native'


import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/colors';

const EventsScreen = () =>(
    
<SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
    <StatusBar translucent={false} backgroundColor={COLORS.primary}></StatusBar>
        <View style={styles.header}>
          <Icon.Button
            name="ios-menu" size={25}
            backgroundColor={COLORS.primary}
            onPress={() => navigation.openDrawer()}
            >
          </Icon.Button>

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
            height:80,
            paddingHorizontal:20
          }}
          >
            <View>
              <Text style={styles.headerTitle}>Events & Tradition</Text>
              
              <View style={styles.inputContainer}>
                <Icon name="search" size={28}></Icon>
                <TextInput placeholder="Search an event" style={{color:COLORS.grey}}></TextInput>
              </View>
            </View>  
          </View>

          <Text style={styles.sectionTitle}>Recomanded</Text>
          
          

          
          
        </ScrollView>
</SafeAreaView>
)


export default EventsScreen;


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
        fontSize:23
      },
      inputContainer:{
        height:50,
        width:'100%',
        backgroundColor:COLORS.white,
        borderRadius:10,
        position:'absolute',
        //top:90,
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        elevation:12 
      },
      sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
      }
})
