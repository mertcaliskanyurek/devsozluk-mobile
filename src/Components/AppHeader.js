import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Header, Left, Body, Right } from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
     
        <Header style={styles.header}>
       
          <Body>
            <Text style={styles.title}>DEVSozluk</Text>
          </Body>

        </Header>
    
    );
  }
}

const styles = StyleSheet.create({
    header: {
    color:'#fff',
    backgroundColor:'#26ae61',
  },
  title:{
      color:'#fff',
      fontFamily:'Roboto',
      fontSize:15
  }
})