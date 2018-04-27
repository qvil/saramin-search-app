import React from "react";
import { StyleSheet } from "react-native";
import { Container, Spinner } from "native-base";

import { JobList } from "views";
import { jobSearch } from "lib/saramin";

export default class App extends React.Component {
  state = {
    loading: true
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }

  componentDidMount() {
    jobSearch()
      .then(xml => {
        // alert("Job Search success");
        this.setState({ loading: false });
      })
      .catch(error => {
        alert(error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading } = this.state;

    return (
      <Container>
        {loading ? (
          <Container>
            <Spinner style={styles.container} />
          </Container>
        ) : (
          <JobList />
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
