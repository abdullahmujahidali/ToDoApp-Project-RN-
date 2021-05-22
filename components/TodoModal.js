import React from 'react';
import {View, Text, StyleSheet,SafeAreaView,TouchableOpacity,FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import Colors from '../Colors';
export default class TodoModal extends React.Component{
    state={
        name: this.props.list.name,
        color: this.props.list.color,
        todos: this.props.list.todos
    }
    renderTodo = todo =>{
        return (
            <View>
                <Text>
                    {todo.title}
                </Text>
            </View>
        )
    }
    render(){
        const taskCount=this.state.todos.length
        const completedCount=this.state.todos.filter(todo=>todo.completed).length
        return(
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{position: 'absolute',top:64,right:32,zIndex:10}}
                onPrss={this.props.closeModal}
                >
                    <AntDesign name="close" size={24} color={Colors.white} />
                </TouchableOpacity>

                <View style={[styles.section,styles.header,{borderBottomWidth: this.state.color}]}>
                    <View>
                        <Text style={styles.title}>
                            {this.state.name}
                        </Text>
                        <Text style={styles.taskCount}>
                            {completedCount} of {taskCount} tasks

                        </Text>
                    </View>
                </View>
                <View style={[styles.section,{flex:3}]}>
                <FlatList data={this.state.todos} renderItem={({item})=>this.renderTodo(item)}
                keyExtractor={item =>item.title}
                ></FlatList>

                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        color:'white',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    section:{
        flex:1,
        alignSelf: "stretch",
        color:'white',
    },
    header:{
        justifyContent:"flex-end",
        marginLeft:64,
        borderBottomWidth: 3,
        color:'white'
    },
    title:{
        fontSize:30,
        fontWeight:"800",
        color:Colors.light
    },
    taskCount:{
        marginTop:4,
        marginBottom:16,
        color:Colors.lightBlue,
        fontWeight:"600"
    }
})