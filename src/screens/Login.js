//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet , Image , ImageBackground, TextInput , TouchableOpacity , ScrollView  } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { scale, verticalScale, moderateScale , moderateVerticalScale } from 'react-native-size-matters';
import Input from '../components/Input';
import Mybotton from '../components/Mybotton';


// create a component
const Login = () => {
  return (
    <View style={{flex:1}}>
        <ScrollView>
      <View style={{height:moderateVerticalScale(800)   }}>
      <ImageBackground 
       style={{height:'100%' , width:'100%' ,  }}
      source={require('../assets/images/images.jpg')}>
         <Text style={{fontSize:scale(70) , fontWeight:'600' , color:'white' , marginTop:moderateVerticalScale(20) , opacity:0.5, marginLeft:scale(100)}}>Login</Text>
         
         <View style={{ height:moderateVerticalScale(300) , backgroundColor:'white' , opacity:0.5 , marginHorizontal:10 , borderRadius:10 , marginVertical:moderateVerticalScale(100)}}>
         <View style={{height:moderateVerticalScale(200)}}>
         <Input
         mylabel='username'
         myauto={true}
         myplaceholder='email@.com'
         Myonpress={()=>console.log('first')}
         
         />
          <Input
         mylabel='Password'
         myauto={true}
         myplaceholder='Password'
         
         
         />
         
            
            <KeyboardSpacer/>
      </View>
      <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
       <Mybotton
         Mytext='Sign In'
         Mycolour={{backgroundColor:'black'}}
         Myonpress={()=>console.log('first')}
         />
         

      </View>
         </View>
  
      </ImageBackground>
      </View>
     
      
      </ScrollView>
    </View>
  );
};


//make this component available to the app
export default Login;
