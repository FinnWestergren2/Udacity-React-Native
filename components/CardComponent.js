import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CardComponent = ({ navigation, question, deleteCard, editCard }) => {
    return (
    <View style={styles.container}>
        <Text style={styles.child}>{`Q: ${question}`}</Text>
        <Button style={styles.child} title="delete" onPress={deleteCard}/>
        <Button style={styles.child} title="edit" onPress={editCard}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    child: {
        margin: 10
    }
});
  


export default CardComponent;