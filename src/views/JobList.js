import React from "react";
import { StyleSheet, FlatList, Image } from "react-native";
import { Container, Header, Content, List } from "native-base";
import { JobListItem } from "components";

export default class JobList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <JobListItem />
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
