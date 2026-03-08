import { Text, View ,ActivityIndicator} from 'react-native'
import React, { Component } from 'react'


const CustomLoader=()=>{
    return (
      <View style={{flex:1,position:'absolute',alignSelf:'center'}}>
        <ActivityIndicator size="large" color="blue"/>
        <Text>Loading...</Text>
        
      </View>
    )
  }
export default CustomLoader;