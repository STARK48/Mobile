import React, { Component } from 'react'
import { Text, View ,StyleSheet ,ScrollView , StatusBar ,SafeAreaView ,TextInput,Image,Dimensions, TouchableOpacity, FlatList} from 'react-native'
import { Avatar,Title,Paragraph,Caption } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/colors';
const {width} = Dimensions.get('screen');
import posts from '../consts/posts';
import { GET_ALL_POSTS } from '../graphql/request';

import {  
  useQuery
} from "@apollo/client";

import { BASE_URL } from '../config';




const BlogScreen = ({navigation}) => {

const {data,loading,error} = useQuery(GET_ALL_POSTS);

 if (loading || error) return null;    

  const PostCard = ({post}) => (
    <View style={styles.post}>
      <View style={styles.postTop}>
        <Avatar.Image 
        source ={{uri:BASE_URL+post.postBy.profileImg}}
        size={35}
        />
        <View style={{marginLeft:15,flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.title}>{post.postBy.userName}</Text>
              <Icon name={post.postBy.category.categoryUserIcon} color={COLORS.primary}  size={16} style={{marginRight:5}}/>
              <Text style={{color:COLORS.primary,fontSize:12}}>{post.postBy.category.categoryUserName}</Text>
            </View>
            
            <View style={styles.caption}>                        
              <Text style={{color:COLORS.grey,fontSize:12}}>{post.createdAt}</Text>
            </View>
        </View>
      </View>
      <View style={styles.postBody}>
        <Text style={{fontWeight:'bold'}}>{post.title}</Text>
        <Paragraph numberOfLines={4} >{post.body}</Paragraph>
      </View>

      <View>
        {post.postImage?(<Image style={styles.postImage} source={post.postImage}></Image>):null}
      </View>



      <View style={styles.postBottom}>
        <View style={styles.iconContainer}>
          <Icon name='ios-heart-outline' color={COLORS.primary}  size={18} style={{marginRight:5}}/>
          <Text style={{color: COLORS.primary,fontSize:12}}>{post.likeCount}</Text>
        </View>


        <TouchableOpacity 
        onPress = {()=>navigation.navigate('DetailPostScreen',post)}
        >
          <View style={styles.iconContainer}>
            <Icon name='ios-chatbox-outline' color={COLORS.primary}  size={18} style={{marginRight:5}}/>
            <Text style={{color: COLORS.primary,fontSize:12}}>{post.commentCount}</Text>          
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

          <View style={styles.inputContainer}>                
                <TextInput placeholder="What's your mind?" style={{color:COLORS.grey}}></TextInput>
                <Icon name="paper-plane-outline" size={25} color={COLORS.primary} ></Icon>
          </View>

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

          <View style={styles.postContainer}>
            {
              data.getPosts.map((item) => {
                return(<PostCard key={item.id} post={item}/> )
              })
            }      
              
          </View>
          
          

          
          

          
          
        </ScrollView>
        
</SafeAreaView>
)
        }


export default BlogScreen;


const styles =StyleSheet.create({
    header:{
     
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
        height:40,
        width:'70%',
        backgroundColor:COLORS.white,
        borderRadius:10,
        position:'absolute',
        marginHorizontal:'15%',
        justifyContent:'space-between',        
        flexDirection:'row',
        alignItems:'flex-end',
        paddingHorizontal:20,
        alignItems:'center',
        elevation:12,
        top:10 
      },
      sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
      },
      postContainer:{
          marginHorizontal:20,
          alignItems:'center',
          top:-70
      },
      post:{
          //height:250,
          width:'100%',
          borderRadius:10,
          elevation:2,
          marginVertical:10,
          backgroundColor:COLORS.white,
          padding:10
      },
      postTop:{
        flexDirection:'row',
        elevation:5

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
  },postBody:{
    marginTop:10,
  },
  postBottom:{
    marginTop:10,
    flexDirection:'row'
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
  postImage:{
    marginTop:10,
    height:200,
    width:'100%',
    

  }

    
})
