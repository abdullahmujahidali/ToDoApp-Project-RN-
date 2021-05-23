import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput,Keyboard,Animated } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'
import Colors from '../Colors';
import {Swipeable } from "react-native-gesture-handler"
export default class TodoModal extends React.Component {
    state = {
        newTodo: ""
    }
    toggleTodoComplete = index =>{
        let list = this.props.list
        list.todos[index].completed =! list.todos[index].completed;
        this.props.updateList(list);

    }
    addTodo =() =>{
        let list = this.props.list
        list.todos.push({title:this.state.newTodo, completed:false})

        this.props.updateList(list)
        this.setState({newTodo:""})

        Keyboard.dismiss();
    }
    renderTodo = (todo,index) => {
        return (
            <Swipeable renderRightActions={(_,dragX)=>this.rightActions(dragX,index)}>
            <View style={styles.todoContainer}>

                <TouchableOpacity onPress={()=>this.toggleTodoComplete(index)}>
                    <Ionicons name={todo.completed ? 'ios-square' : 'ios-square-outline'} size={24} color={Colors.lightBlue} style={{ width: 32 }}></Ionicons>
                </TouchableOpacity>

                <Text style={[styles.todo, { textDecorationLine: todo.completed ? 'line-through' : 'none', color: todo.completed ? Colors.lightBlue : Colors.light }]}>
                    {todo.title}
                </Text>
            </View>
            </Swipeable>

        )
    }
    rightActions=(dragX,index)=>{
        const scale= dragX.interpolate({
            inputRange:[-100,0],
            outputRange:[1,0.9],
            extrapolate:"clamp"
        })

        const opacity=dragX.interpolate({
            inputRange:[-100,-20,0],
            outputRange:[1,0.9,0],
            extrapolate:"clamp"
        })
        return(
            <TouchableOpacity>
                <Animated.View style={styles.deleteButton, {opacity:opacity}}>
                    <Animated.Text style={{color:Colors.light,fontWeight:"800",transform:[{scale}]}}>
                        Delete
                    </Animated.Text>
                </Animated.View>
            </TouchableOpacity>
        )
    }
    render() {
        const list = this.props.list
        const taskCount = list.todos.length
        const completedCount = list.todos.filter(todo => todo.completed).length
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity style={{ position: 'absolute', top: 64, right: 32, zIndex: 10 }}
                        onPress={this.props.closeModal}
                    >
                        <AntDesign name="close" size={24} color={Colors.light} />
                    </TouchableOpacity>

                    <View style={[styles.section, styles.header, { borderBottomColor: list.color }]}>
                        <View>
                            <Text style={styles.title}>
                                {list.name}
                            </Text>
                            <Text style={styles.taskCount}>
                                {completedCount} of {taskCount} tasks

                        </Text>
                        </View>
                    </View>
                    <View style={[styles.section, { flex: 3,marginVertical:16 }]}>
                        <FlatList data={list.todos}
                            renderItem={({ item,index }) => this.renderTodo(item,index)}
                            keyExtractor={item => item.title}
                            showsVerticalScrollIndicator={false}
                        ></FlatList>

                    </View>

                    <View style={[styles.section, styles.footer]} >
                        <TextInput style={[styles.input, { borderColor: list.color }]} onChangeText={text=>this.setState({newTodo: text})} value={this.state.newTodo} />
                        <TouchableOpacity style={[styles.addTodo, { backgroundColor: list.color }]} onPress={()=>this.addTodo()}>
                            <AntDesign name="plus" size={16} color={Colors.light} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    section: {
        alignSelf: "stretch"
    },
    header: {
        justifyContent: "flex-end",
        marginLeft: 64,
        borderBottomWidth: 3,
        color: 'white',
        paddingTop:16
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        color: Colors.light
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: Colors.lightBlue,
        fontWeight: "600"
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical:16
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 8,
        backgroundColor: '#fff'
    },
    addTodo: {
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    todoContainer: {
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
        paddingLeft:32
    },
    todo: {
        color: Colors.light,
        fontWeight: "700",
        fontSize: 16
    },
    deleteButton:{
        flex:1,
        backgroundColor: Colors.primary,
        justifyContent:'center',
        alignItems:'center',
        width:60
    }
})