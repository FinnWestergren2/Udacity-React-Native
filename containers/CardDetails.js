import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Decks = () => {
    return (
    <View style={styles.container}>
        <Text>Decks</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default HomePage;
