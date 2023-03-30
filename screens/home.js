import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText="QUIZZINE"/>
      <View style={styles.bannerContainer}>
        <Image source={{
          uri:'https://ouch-cdn2.icons8.com/WAX8W7kT4Zyt49V8-TTxvQ8g9ZLaA1mmVeLPaozmXlk/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTg4/L2Q5NjQ1NTVjLTFk/MGQtNDdkNi1hZThl/LWUyYzM2NTI5Yzlk/Zi5wbmc.png'
        }}
        style={styles.banner}/>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;

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
})