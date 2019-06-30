import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { navigateToDeckDetails } from '../helpers/navigation';

const DeckComponent = ({navigation, id, size}) => {
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigateToDeckDetails(navigation, id)}>
            <Text>{id}</Text>
            <Text>size: {size}</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin:10,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});



export default DeckComponent;