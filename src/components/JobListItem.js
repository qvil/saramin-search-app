import React from "react";
import { StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
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

  handlePress = url => () => {
    Linking.openURL(url);
  };

  render() {
    const { position } = this.props;
    const title = position[0].title[0];
    const salary = this.props.salary[0]["_"];
    const url = this.props.url[0];
    const company = this.props.company[0].name[0]["_"];
    const { handlePress } = this;

    return (
      <ListItem>
        <Image style={{ width: 50, height: 50 }} source={logo} />
        <TouchableOpacity onPress={handlePress(url)}>
          <Body>
            <Text>{title}</Text>
            <Text note>{company}</Text>
            <Text note>{salary}</Text>
          </Body>
        </TouchableOpacity>
      </ListItem>
    );
  }
}

export default JobListItem;
