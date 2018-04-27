import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyComponent } from "components";
import { jobSearch } from "lib/saramin";

export default class App extends React.Component {
  state = {
    xml: null
  };

  componentDidMount() {
    jobSearch()
      // .then(xml => this.setState({ xml }))
      // .catch(error => this.setState({ xml: error }));
      .then(xml => alert("Job Search success"))
      .catch(error => alert(error));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.xml}
        <MyComponent />
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
