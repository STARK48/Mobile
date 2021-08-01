import React, { Component } from 'react'
import { Text, View ,StyleSheet ,ScrollView , StatusBar ,SafeAreaView ,TextInput,Image,Dimensions, TouchableOpacity} from 'react-native'


import { Avatar,Paragraph} from 'react-native-paper';


import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/colors';

import events
 from '../consts/events';

const EventsScreen = ({navigation}) => {

  const EventCard = ({event}) => (
    <View style={styles.event}>
      
      <View>
        {event.eventImage?(<Image style={styles.eventImage} source={event.eventImage}></Image>):null}
        
      </View>

      <View style={styles.eventTop}>
        <Avatar.Image 
        source ={event.userImgProfile}
        size={35}
        />
        <View style={{marginLeft:15,flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.title}>{event.userName}</Text>
              <Icon name={event.userCategoryIcon} color={COLORS.primary}  size={16} style={{marginRight:5}}/>
              <Text style={{color:COLORS.primary,fontSize:12}}>{event.userCategory}</Text>
            </View>
            
            <View style={styles.caption}>                        
              <Text style={{color:COLORS.grey,fontSize:12}}>12 min ago</Text>
            </View>
        </View>

        <View style={{marginHorizontal:20,flexDirection:'column'}}>
          
          <View style={{marginHorizontal:20,flexDirection:'row'}}>
            <Icon name='location-outline' size={22} color={COLORS.primary}/>
            <Text style={{color:COLORS.primary,fontSize:12,marginHorizontal:10,marginVertical:2}}>{event.location}</Text>
          </View>

          <View style={{marginHorizontal:20,flexDirection:'row'}}>
            <Icon name='md-calendar-outline' size={22} color={COLORS.primary}/>
            <Text style={{color:COLORS.primary,fontSize:12,marginHorizontal:10,marginVertical:2}}>{event.dateBegin}</Text>
          </View>
        </View>
      </View>
      <View style={styles.eventBody}>
        <Text style={{fontWeight:'bold'}}>{event.title}</Text>
        <Paragraph numberOfLines={3} >{event.description}</Paragraph>
      </View>

      



      <View style={styles.eventBottom}>
        <View style={styles.iconContainer}>
          <Icon name='ios-heart-outline' color={COLORS.primary}  size={18} style={{marginRight:5}}/>
          <Text style={{color: COLORS.primary,fontSize:12}}>{event.likeCount}</Text>
        </View>


        <TouchableOpacity 
        onPress = {()=>navigation.navigate('DetailEventScreen',event)}
        >
          <View style={styles.iconContainer}>
            <Icon name='ios-chatbox-outline' color={COLORS.primary}  size={18} style={{marginRight:5}}/>
            <Text style={{color: COLORS.primary,fontSize:12}}>{event.commentCount}</Text>          
          </View>
        </TouchableOpacity>


        

      </View>
    </View>
);
  
  
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
            
          </View>

          
          <View style={styles.eventContainer}>
            {
              events.map((item) => {
                return(<EventCard event={item}/> )
              })
            }      
              
          </View>

          
          
          

          
          
        </ScrollView>
</SafeAreaView>
)
        }

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
    eventContainer:{
      marginHorizontal:20,
      alignItems:'center',
      top:-70
  },
  event:{
      //height:250,
      width:'100%',
      borderRadius:10,
      elevation:2,
      marginVertical:10,
      backgroundColor:COLORS.white,
      
  },
      eventTop:{
        marginTop:10,
      flexDirection:'row',
      elevation:5,
      paddingHorizontal:10

},
title:{
      fontSize:12,
      marginRight:5,
      fontWeight:'bold',
},
caption:{
      flexDirection:'row',
      marginTop:4,
      fontSize:10,
      lineHeight:10,
      color:COLORS.primary
},
eventBody:{
marginTop:10,
paddingHorizontal:10
},
eventBottom:{
marginTop:10,
flexDirection:'row',
paddingHorizontal:10,
paddingVertical:10
},
iconContainer: {
height: 30,
width: 60,
backgroundColor: COLORS.secondary,
marginRight:10,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
borderRadius: 10,    
paddingHorizontal:10,
},
eventImage:{
borderTopLeftRadius:10,
borderTopRightRadius:10,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
height:200,
width:'100%',


}
})
