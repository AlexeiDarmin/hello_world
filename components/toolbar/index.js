import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default class MyToolBar extends React.Component {
  render() {
    return (
      <Toolbar
        leftElement="menu"
        centerElement="Find hello"
        searchable={{
          autoFocus: true,
          placeholder: 'Finding hello',
        }}
        rightElement={{
          menu: {
            icon: "more-vert",
            labels: ["First hello", "Second hello"]
          }
        }}
        onRightElementPress={(label) => { console.log(label) }}
      />
    );
  }
}