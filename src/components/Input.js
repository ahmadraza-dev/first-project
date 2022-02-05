//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

// create a component
const Input = ({mylabel = '', myauto, myplaceholder = '' , Myonpress = ()=>{} }) => {
  return (
    <View>
      <Text style={{fontSize: scale(20), marginLeft: 15 , fontWeight:'600' , color:'black'}}>{mylabel}</Text>
      <TextInput
        style={{height: 40, margin: 12,  borderBottomWidth:1 , borderRadius:2}}
        placeholder={myplaceholder}
        autoFocus={myauto}
        onPress={Myonpress}
      />
    </View>
  );
};

export default Input;
