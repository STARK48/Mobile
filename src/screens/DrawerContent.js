import React, { Component } from 'react'
import {  View ,StyleSheet, TouchableOpacity} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Caption
} from 'react-native-paper';

import COLORS from '../consts/colors'

import Icon from 'react-native-vector-icons/Ionicons'

export function DrawerContent(props) {
    return (
        <View style={{flex:1}}>
           <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image 
                                source = {require('../assets/pdp.jpg')}
                                size={50}
                            
                            />
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Yuri Boyka</Title>
                                <Caption style={styles.caption}>@yuriboyka</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                                <View style={styles.section}>
                                        <Paragraph style={styles.paragraph}>80</Paragraph>
                                        <Caption style={styles.caption}>Following</Caption>
                                </View>

                                <View style={styles.section}>
                                        <Paragraph style={styles.paragraph}>100</Paragraph>
                                        <Caption style={styles.caption}>Followers</Caption>
                                </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>

                            <TouchableOpacity 
                            onPress={()=>alert('test')}
                            >
                                <DrawerItem
                                    icon={({size}) =>(
                                        <Icon 
                                        name="home-outline"
                                        color={COLORS.primary}
                                        size={size}
                                        />
                                    )}
                                    label ="Home"
                                    onPress={()=>{props.navigation.navigate("Home")}}
                                    />
                            </TouchableOpacity>

                            <DrawerItem
                                icon={({size}) =>(
                                    <Icon 
                                    name="person-outline"
                                    color={COLORS.primary}
                                    size={size}
                                    />
                                )}
                                label ="Profile"
                                />
                        <DrawerItem
                                icon={({size}) =>(
                                    <Icon 
                                    name="options-outline"
                                    color={COLORS.primary}
                                    size={size}
                                    />
                                )}
                                label ="Control Pannel"
                                onPress={()=>props.navigation.navigate("ControlPannel")}
                                />

                        <DrawerItem
                                icon={({size}) =>(
                                    <Icon 
                                    name="notifications-outline"
                                    color={COLORS.primary}
                                    size={size}
                                    />
                                )}
                                label ="Notifications"
                                onPress={()=>{props.navigation.navigate("NotificationsScreen")}}
                                />

                        </Drawer.Section>


                        
                        <DrawerItem
                                icon={({size}) =>(
                                    <Icon 
                                    name="settings-outline"
                                    color={COLORS.primary}
                                    size={size}
                                    />
                                )}
                                label ="About"
                                onPress={() => {props.navigation.navigate('SettingsScreen')}}
                                />
                        
                    </View>
                </View>
           </DrawerContentScrollView>
           <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) =>(
                    <Icon 
                    name="log-out-outline"
                    color={COLORS.primary}
                    size={size}
                    
                    />
                )}
                label ="Log out"
                />
           </Drawer.Section>
            
        </View>
    )
    
}
 const styles = StyleSheet.create({

    drawerContent:{
        flex:1,
    },
    userInfoSection:{        
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:15,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    }
 })