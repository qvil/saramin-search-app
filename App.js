import React from "react";
import { StyleSheet } from "react-native";
import { Container, Spinner } from "native-base";

import { JobList } from "views";
import { jobSearch } from "lib/saramin";

var parseString = require("xml2js").parseString;

export default class App extends React.Component {
  state = {
    loading: true,
    data: {}
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }

  componentDidMount() {
    let json;

    jobSearch()
      .then(xml => {
        parseString(xml, (err, result) => {
          this.setState({ loading: false, data: result });
        });
      })
      .catch(error => {
        alert(error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, data } = this.state;

    return (
      <Container>
        {loading ? (
          <Container>
            <Spinner style={styles.container} />
          </Container>
        ) : (
          <JobList data={data} />
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
