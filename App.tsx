import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Result from "./screens/result";

const App=()=>{
  return(
  <>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
      {/* <Home/> */}
      {/* <Quiz/> */}
      {/* <Result/> */}
  </>
    
  );
};
export default App;

const style=StyleSheet.create({
  container:{
    
  }
})