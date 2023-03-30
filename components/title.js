import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from 'native-base/lib/typescript/theme/styled-system';

const Title = ({titleText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title:{
    fontSize:36,
    fontWeight:'600',
    color:'#1A759F'
    
  },
  container:{
    paddingVertical:10,
    justifyContent:'center',
    alignItems:'center',
  }
})