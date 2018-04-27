import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body
} from "native-base";
import logo from "./ts-logo.png";

class JobListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem>
        <Image style={{ width: 50, height: 50 }} source={logo} />
        <Body>
          <Text>Title</Text>
          <Text note>Content</Text>
        </Body>
      </ListItem>
    );
  }
}

export default JobListItem;
