import React, { Component } from 'react'
import { Text, View ,StyleSheet ,ScrollView , StatusBar ,SafeAreaView ,TextInput,Image,Dimensions, TouchableOpacity} from 'react-native'
import { Avatar,Title,Paragraph,Caption } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/colors';

const DetailPostScreen = ({navigation,route}) => { 

    const post = route.params;

    const Comment = ({comment}) => (
        <View style={styles.commentContainer}> 
                        <View style={{marginRight:10}}>
                            <Avatar.Image 
                            source ={comment.userImgProfile}
                            size={35}
                            /> 
                        </View>

                        <View style={styles.comment}>
                            <Text >{comment.body}</Text>
                        </View>
                        
                        
        </View>
    )
    
    return(
    
<SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
    <StatusBar translucent={false} backgroundColor={COLORS.primary}></StatusBar>
    <View style={styles.header}>
                    <Icon name="ios-arrow-back-outline" size={28} style={{marginTop:30,position:"absolute",marginHorizontal:20}} color={COLORS.white} onPress={()=>navigation.goBack()}></Icon>
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
                <View style={styles.post}>
                    <View style={styles.postTop}>
                        <Avatar.Image 
                        source ={post.userImgProfile}
                        size={35}
                        />
                        <View style={{marginLeft:15,flexDirection:'column'}}>
                            <View style={{flexDirection:'row'}}>
                            <Text style={styles.title}>{post.userName}</Text>
                            <Icon name={post.userCategoryIcon} color={COLORS.primary}  size={16} style={{marginRight:5}}/>
                            <Text style={{color:COLORS.primary,fontSize:12}}>{post.userCategory}</Text>
                            </View>
                            
                            <View style={styles.caption}>                        
                            <Text style={{color:COLORS.grey,fontSize:12}}>12 min ago</Text>
                            </View>
                        </View>
                    </View>
                <View style={styles.postBody}>
                    <Text style={{fontWeight:'bold'}}>{post.title}</Text>
                    <Paragraph>{post.body}</Paragraph>
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

                <View style={styles.inputContainer}>
                    <TextInput placeholder="Comments" multiline = {true}
numberOfLines = {2} style={{color:COLORS.grey}}></TextInput>
                    <Icon name="paper-plane-outline" size={25} color={COLORS.primary} ></Icon>
                </View>

                <View style={{marginVertical:20}}>

                    {post.comments.map((item) => {
                        return(<Comment index={item.id} comment={item} />)
                    })}
                    

                    <View style={styles.commentContainer}> 
                        <View style={{marginRight:10}}>
                            <Avatar.Image 
                            source ={post.userImgProfile}
                            size={35}
                            /> 
                        </View>

                        <View style={styles.comment}>
                            <Text  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.</Text>
                        </View>
                        
                        
                    </View>

                   
                </View>

            </View>

            
        </ScrollView>
</SafeAreaView>
)}


export default DetailPostScreen;


const styles =StyleSheet.create({
    header:{
            
        backgroundColor:COLORS.primary,
        height:60,
        paddingHorizontal:20,
        
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
    },
    postBody:{
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
  

},
inputContainer:{
    //height:60,
    width:'100%',
    backgroundColor:COLORS.white,
    borderRadius:10,
    justifyContent:'space-between',        
    flexDirection:'row',
    alignItems:'flex-end',
    paddingHorizontal:20,
    alignItems:'center',
    elevation:4,
    //top:70
  },
  commentContainer:{
      marginHorizontal:20,
      marginVertical:10,
      flexDirection:'row',
      justifyContent:'flex-start',
      elevation:2,
      width:'100%'
      //alignItems:'flex-start'
  },
  comment:{
      elevation:2,
      borderRadius:5,
      paddingHorizontal:15,
      paddingVertical:10,
      width:'80%'
    }
})
