import React from 'react';
import {View,Text,StyleSheet,KeyboardAvoidingView, TouchableOpacity,TextInput, TouchableWithoutFeedback} from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import Colors from '../Colors';
import { createPortal } from 'react-dom';
export default class AddListModal extends React.Component{
    backgroundColors=["##5CD859","#24A6D9","#595BD9","8022D9","D2159D8","D85963","D88559","#304659"];
    state ={
        name:"",
        color: this.backgroundColors[0]
    }
    render(){
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <TouchableOpacity style={{position:"absolute",top:64,right:32}} onPress={this.props.closeModal}>
                    <AntDesign name="close" size={24} color={Colors.light}></AntDesign>
                </TouchableOpacity>


                <View style={{alignSelf:"stretch",marginHorizontal:32}}>
                <Text style={styles.title}>
                    Create Todo List
                </Text>
                <TextInput style={styles.input} placeholder="List Name ?" onChangeText={this.setState({name:text})}></TextInput>

                <TouchableOpacity style={[styles.create,{backgroundColor:this.state.color}]}>
                    <Text style={{color:Colors.light,fontWeight:"600"}}>Create!</Text>
                </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#000",
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
    title:{
        fontSize:28,
        color:Colors.light,
        alignSelf:"center",
        marginBottom:16
    },
    input:{
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.primary,
        borderRadius: 6,
        height:50,
        marginTop:8,
        paddingHorizontal:16,
        fontSize:18,
        backgroundColor: "#808080"
    },
    create:{
        marginTop:24,
        height:50,
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center"
    }

})