import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyComponent } from "components";
import LibTestComponent from "lib/LibTestComponent";
// import MyComponent from "components/MyComponent";
// import MyComponent from "./src/components/MyComponent";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyComponent />
        <LibTestComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
