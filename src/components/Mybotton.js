//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
// create a component
const Mybotton = ({Mytext, Mycolour, Myonpress = ()=>{}}) => {
  return (
    <TouchableOpacity
      style={{...styles.ButtonStyle,...Mycolour}}
      onPress={Myonpress}>
        
      <Text style={{fontSize: scale(25) , color:'white'}}>{Mytext}</Text>
    </TouchableOpacity>
  );
};

export default Mybotton;

const styles = StyleSheet.create({
  ButtonStyle: {
    height: moderateVerticalScale(50),
    width: scale(100),
    backgroundColor: 'Mycolour',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5
  },
});
