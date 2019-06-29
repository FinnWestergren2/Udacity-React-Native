import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, TextInput, KeyboardAvoidingView} from 'react-native';

import { addCardToDeck, getCardFromDeck } from '../api/decks';
import { DECK_ID, INDEX, REPLACE, CARD } from '../helpers/navigation';

const AddCard = ({navigation}) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const deckId = navigation.getParam(DECK_ID);
    const index = navigation.getParam(INDEX);
    const replace = navigation.getParam(REPLACE);
    const card = navigation.getParam(CARD);

    useEffect(() => {
        if (replace && card) {
            setQuestion(card.question);
            setAnswer(card.answer);
        }
    },[]);

    const submit = () => {
        setStatusMessage('Submitting...');
        if (!question) {
            setStatusMessage('Question cannot be empty');
            return;
        }
        if (!answer) {
            setStatusMessage('Answer cannot be empty');
            return;
        }
        addCardToDeck(deckId, { question, answer }, index, replace).then(navigation.pop);
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text>Enter Card Info</Text>
            <TextInput placeholder="Enter a Question" value={question} onChangeText={(t) => setQuestion(t)}></TextInput>
            <TextInput placeholder="Enter the Answer" value={answer} onChangeText={(t) => setAnswer(t)}></TextInput>
            <Button title="submit" onPress={submit}/>
            <Text>{statusMessage}</Text>
        </KeyboardAvoidingView>
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

export default AddCard;
