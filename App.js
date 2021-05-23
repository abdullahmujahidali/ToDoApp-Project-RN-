import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from './Colors'
import TodoList from "./components/ToDoList";
import AddListModal from './components/AddListModal';
import tempData from './tempData'
export default class App extends React.Component {
  state = {
    addtodoVisible: false,
    lists: tempData
  }
  toggleAddTodoModal() {
    this.setState({ addtodoVisible: !this.state.addtodoVisible })
  }
  renderList = list => {
    return <TodoList list={list} updateList={this.updateList} />
  }

  addList = list => {
    this.setState({ lists: [...[this.state.lists], { ...list, id: this.state.lists.length + 1, todos: [] }] });

  };
  updateList=list=>{
    this.setState({
      lists: this.state.lists.map(item=>{
        return item.id === list.id ? list:item;
      })
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal 
          animationType="slide" visible={this.state.addtodoVisible}>
          <AddListModal closeModal={() => this.toggleAddTodoModal()} 
          addList={this.addList} />
        </Modal>
        <Image style={styles.imgStyle} source={require('./assets/todoLogo.png')} />
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo <Text style={{ fontWeight: "300", color: colors.primary }}>
              Lists </Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList} >
            <AntDesign style={styles.add} size={24} name="plus" onPress={() => this.toggleAddTodoModal()} onRequestClose={() => this.toggleAddTodoModal()} />

          </TouchableOpacity>
        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={this.state.lists}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              this.renderList(item)
            }
            keyboardShouldPersistTaps="always"
          />

        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 100,
    height: 100
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.light,
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightBlue,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: colors.light,
    fontWeight: "600",
    borderRadius: 25,
    fontSize: 18,
  }
});
