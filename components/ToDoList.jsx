import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Modal } from 'react-native';
import  Colors  from "../Colors";
import TodoModel from './TodoModal'
export default class TodoList extends React.Component {
    state = {
        showListVisible: false
    }
    toggleListMoal() {
        this.setState({ showListVisible: !this.state.showListVisible })
    }
    render() {
        const list = this.props.list

        const completedCount = list.todos.filter(todo => todo.completed).length;
        const remainingCount = list.todos.length - completedCount;

        return (
            <View>
            <Modal animationType="slide" visible={this.state.showListVisible} onRequestClose={()=>this.toggleListMoal()}>
                <TodoModel list={list} closeModal ={()=>this.toggleListMoal() } />
            </Modal>
                <TouchableOpacity 
                    style={[styles.listContainer, { backgroundColor: list.color }]} 
                    onPress= {()=>this.toggleListMoal()}>
                    <Text style={styles.listTitle} numberOfLines={1}>
                        {list.name}
                    </Text>
                    <View >
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.count}>{completedCount}</Text>
                            <Text style={styles.subtitle}>Remaining</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.count}>{remainingCount}</Text>
                            <Text style={styles.subtitle}>Completed</Text>
                        </View>
                    </View>


                </TouchableOpacity>
            </View>

        )
    }

};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.light,
        marginBottom: 18
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: Colors.light,
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: Colors.light,
    }
})