import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DeckComponent = ({navigation, title, id, size}) => {
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('DeckDetails', {id: id})}>
            <Text>{`title: ${title} size: ${size}`}</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  


export default DeckComponent;