import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import colors from './Colors'

export default class App extends React.Component {
  render(){
     return (
    <View style={styles.container}>
    {/* <Image source={require('./assets/todoLogo.png')} /> */}
      <View style={{flexDirection: "row"}}>
        <View style={styles.divider}/>
        <Text style={styles.title}>
        Todo <Text style={{fontWeight:"300", color: colors.primary}}>
          Lists
        </Text>
        </Text>
        <View style={styles.divider}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle:{
    height: 50,
    width:50,
  },
  divider:{
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title:{
    fontSize:38,
    fontWeight: "800",
    color: colors.dark,
    paddingHorizontal:64
  }
});
