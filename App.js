import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tempData from './tempData'
import colors from './Colors'
import TodoList from "./components/ToDoList";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={16} color={colors.dark} />
            <Text style={styles.add}>Add List</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 80,
    height: 80 
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
    color: colors.dark,
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 18,
    marginTop: 8
  }
});
