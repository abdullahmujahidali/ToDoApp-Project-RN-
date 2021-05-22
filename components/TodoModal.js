import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'
import Colors from '../Colors';
export default class TodoModal extends React.Component {
    state = {
        name: this.props.list.name,
        color: this.props.list.color,
        todos: this.props.list.todos
    }
    renderTodo = todo => {
        return (
            <View style={styles.todoContainer}>

                <TouchableOpacity>
                    <Ionicons name={todo.completed ? 'ios-square' : 'ios-square-outline'} size={24} color={Colors.lightBlue} style={{ width: 32 }}></Ionicons>
                </TouchableOpacity>

                <Text style={[styles.todo, { textDecorationLine : todo.completed ? 'line-through' : 'none', color: todo.completed ? Colors.lightBlue : Colors.light }]}>
                    {todo.title}
                </Text>
            </View>

        )
    }
    render() {
        const taskCount = this.state.todos.length
        const completedCount = this.state.todos.filter(todo => todo.completed).length
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{ position: 'absolute', top: 64, right: 32, zIndex: 10 }}
                    onPress={this.props.closeModal}
                >
                    <AntDesign name="close" size={24} color={Colors.light} />
                </TouchableOpacity>

                <View style={[styles.section, styles.header, { borderBottomColor: this.state.color }]}>
                    <View>
                        <Text style={styles.title}>
                            {this.state.name}
                        </Text>
                        <Text style={styles.taskCount}>
                            {completedCount} of {taskCount} tasks

                        </Text>
                    </View>
                </View>
                <View style={[styles.section, { flex: 3 }]}>
                    <FlatList data={this.state.todos} renderItem={({ item }) => this.renderTodo(item)}
                        keyExtractor={item => item.title}
                        contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
                        showsVerticalScrollIndicator={false}
                    ></FlatList>

                </View>

                <KeyboardAvoidingView style={[styles.section, styles.footer]} behavior="padding">
                    <TextInput style={[styles.input, { borderColor: this.state.color }]} />
                    <TouchableOpacity style={[styles.addTodo, { backgroundColor: this.state.color }]}>
                        <AntDesign name="plus" size={16} color={Colors.light} />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
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
        flex: 1,
        alignSelf: "stretch"
    },
    header: {
        justifyContent: "flex-end",
        marginLeft: 64,
        borderBottomWidth: 3,
        color: 'white'
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
        alignItems: "center"
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
        color: 'white'
    },
    todo: {
        color: Colors.light,
        fontWeight: "700",
        fontSize: 16
    }
})