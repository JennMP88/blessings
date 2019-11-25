import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";

// var ReactNativeComponentTree = require('react/lib/ReactNativeComponentTree');
// ReactNativeComponentTree.getInstanceFromNode(nativeTag);

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menu: ["Love", "Family", "Health", "Salvation", "General", "Death"],
      keyword:" "
    };
     this.selectionPressed=this._selectionPressed.bind(this)
  }

  _selectionPressed = (item,i) => {
    
    // console.log("pressed",item.currentTarget);
    console.log(item.nativeEvent.target);
    // a href="#"
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.menu}
          renderItem={({ item, index }) => (
            <>
              <View style={styles.wrapper}>
                
                <Text onPress={this.selectionPressed} style={styles.item}>{item}</Text>
              </View>
            </>
          )}
          keyExtractor={(item,index) => index.toString()}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 30,
    width: 2000,
    alignItems: "flex-end",
    alignSelf: "flex-end"
  },
  item: {
    paddingBottom: 30,
    fontSize: 40,
    paddingEnd: 20
  }
});
