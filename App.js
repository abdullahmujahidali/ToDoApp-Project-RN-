import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList,Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tempData from './tempData'
import colors from './Colors'
import TodoList from "./components/ToDoList";
import AddListModal from './components/AddListModal';
export default class App extends React.Component {
  state = {
    addtodoVisible: false
  }
  toggleAddTodoModal(){
    this.setState({addtodoVisible: !this.state.addtodoVisible})
  }

  render() {
    return (
      <View style={styles.container}>
      <Modal animationType="slide" visible={this.state.addtodoVisible}>
        <AddListModal closeModal={()=> this.toggleAddTodoModal()}/>
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
            <AntDesign style={styles.add} size={24} name="plus"  onPress={()=>this.toggleAddTodoModal()} onRequestClose={()=>this.toggleAddTodoModal()}/>
           
          </TouchableOpacity>
        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={tempData}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              <TodoList list={item} />
            }
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
