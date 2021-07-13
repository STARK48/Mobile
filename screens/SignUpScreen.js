import React, { Component } from 'react'
import { Text, View,Button,Dimensions,StyleSheet,Image,TouchableOpacity,Platform,TextInput,StatusBar } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';


const SignUpScreen = ({navigation}) =>{

  const [data, setData] = React.useState({
    email:'',
    password:'',
    confirmPassword:'',
    check_textInputChange:false,
    secureTextEntry:true,
    confirm_secureTextEntry:true
  })

  const textInputChange = (val) => {

    if (val.length != 0) {
      setData({
        ...data,
        email:val,
        check_textInputChange:true
      })
    } else{
      setData({
        ...data,
        email:val,
        check_textInputChange:false
      })
    }
  }

  const handlePasswordChange = (val)=>{
    setData({
      ...data,
      password:val
      
    })
  }
  const updateSecureTextEntry = () =>{
    setData({
      ...data,
      secureTextEntry:!data.secureTextEntry
    })
  }

  const handleConfirmPasswordChange = (val)=>{
    setData({
      ...data,
      confirmPassword:val
      
    })
  }
  const confirm_updateSecureTextEntry = () =>{
    setData({
      ...data,
      confirm_secureTextEntry:!data.confirm_secureTextEntry
    })
  }
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
          <Text style={styles.text_header} >Register Now</Text>
         </View>

         <Animatable.View 
          animation="fadeInUpBig"
          style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <Icon
              name="person-outline"
              color="#05375a"
              size={20}
              />

              <TextInput 
              placeholder="Your email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val)=>textInputChange(val)}
              />

              {data.check_textInputChange ? 
              <Icon
              name="checkmark-circle-outline"
              color="green"
              size={20}
              />  
              : null  
              }
             </View>
          
       

          <Text style={styles.text_footer,{marginTop:35}}>Password</Text>
            <View style={styles.action}>
                  <Icon
                  name="lock-closed-outline"
                  color="#05375a"
                  size={20}
                  />

                  <TextInput 
                  placeholder="Your password"
                  secureTextEntry={data.secureTextEntry?true:false}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(val)=>handlePasswordChange(val)}
                  />


                  <TouchableOpacity

                    onPress={updateSecureTextEntry}
                  
                  >
                    {data.secureTextEntry ? 
                    <Icon
                    name="eye-off-outline"
                    color="black"
                    size={20}
                    />  :
                    <Icon
                      name="eye-outline"
                      color="black"
                      size={20}
                      />   }

                      
                  </TouchableOpacity>
              
          
            </View> 


            <Text style={styles.text_footer,{marginTop:35}}>Confirm Password</Text>
            <View style={styles.action}>
                  <Icon
                  name="lock-closed-outline"
                  color="#05375a"
                  size={20}
                  />

                  <TextInput 
                  placeholder="Your password"
                  secureTextEntry={data.confirm_secureTextEntry?true:false}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(val)=>handleConfirmPasswordChange(val)}
                  />


                  <TouchableOpacity

                    onPress={confirm_updateSecureTextEntry}
                  
                  >
                    {data.confirm_secureTextEntry ? 
                    <Icon
                    name="eye-off-outline"
                    color="black"
                    size={20}
                    />  :
                    <Icon
                      name="eye-outline"
                      color="black"
                      size={20}
                      />   }

                      
                  </TouchableOpacity>
              
          
            </View> 

            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack('SignInScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop:5
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
         </Animatable.View>      
      </View>
    );
  };

export default SignUpScreen


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex:5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
      
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,  
  },
  button: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom:20
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
      
  }
});
