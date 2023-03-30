import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Result = ({navigation,route}) => {
  const {score}=route.params
  

  return (
    <View style={styles.container}>
    <Title titleText="RESULTS"/>
    <Text>{score}</Text>
    <View style={styles.bannerContainer}>
      <Image source={{
        uri:'https://ouch-cdn2.icons8.com/bPh_AVG47BckBO94mIInK0kjOv-Rh68_6l5cpbtZ_EI/rs:fit:256:352/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjQ4/LzU2YzI4MjMyLTlk/NTMtNGE2NC04ZjZk/LTllZGM4YWM4N2I4/MC5wbmc.png',

      }}
      style={styles.banner}
      resizeMode="contain"
      />
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}>
      <Text style={styles.buttonText}>GO TO HOME</Text>
    </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner:{
    height:300,
    width:300,
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  container:{
    padding:40,
    paddingHorizontal:20,
    height:"100%"
  },
  button:{
    width:'100%',
    backgroundColor:'#1A759F',
    padding:20,
    borderRadius:20,
    alignItems:'center',
    marginBottom:30
  },
  buttonText:{
    fontSize:24,
    fontWeight:'600',
    color:'white'
  }
});
