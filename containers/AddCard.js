import React, { useRef, useState } from 'react';
import { StyleSheet, Text, Button, TextInput, KeyboardAvoidingView} from 'react-native';

import { addCardToDeck } from '../api/api';

const AddCard = ({navigation}) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const deckId = navigation.getParam("deckId");

  const submit = () => {
    setStatusMessage('Submitting...');

    if(!question){
        setStatusMessage('Question cannot be empty');
        return;
      }
    if(!answer){
        setStatusMessage('Answer cannot be empty');
        return;
      }

    addCardToDeck(deckId, { question, answer }).then(navigation.pop)
  }

    return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>Create a new Deck</Text>
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
