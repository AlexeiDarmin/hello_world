import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Toolbar from './components/toolbar';

console.log('statusBarHeight: ', StatusBar.currentHeight);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <View style={styles.content}>
          <Text>Hello world.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
    display: 'flex',
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
});
