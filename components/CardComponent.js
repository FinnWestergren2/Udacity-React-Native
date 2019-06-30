import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonWrapper from '../components/ButtonWrapper';

const CardComponent = ({ navigation, question, deleteCard, editCard }) => {
    return (
    <View style={styles.container}>
        <ButtonWrapper title="delete" onPress={deleteCard}/>
        <ButtonWrapper title="edit" onPress={editCard}/>
        <Text style={styles.child}>{`Q: ${question}`}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row-reverse",
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 100
    },
    child: {
        margin: 10
    }

});


export default CardComponent;