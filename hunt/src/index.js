import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.containe}>
        <Text style={styles.welcome}> Presunto Fedorento </Text>
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: '#F00'
  }
});
