import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, StatusBar,TouchableOpacity ,Image} from 'react-native';
import { Badge } from 'react-native-paper';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/Ionicons';


const FakeScreen = ({navigation}) => {
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
      </SafeAreaView>
    );
};

export default FakeScreen;

const styles = StyleSheet.create({
    header:{      
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:COLORS.primary
      },
});
