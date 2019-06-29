import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, KeyboardAvoidingView } from 'react-native';

import { navigateToDeckDetails } from '../helpers/navigation';
import { getDeck, addDeck } from '../api/decks';

const AddDeck = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const submit = () => {
    setStatusMessage('Submitting...');
    if(!title) {
      setStatusMessage('Title cannot be empty');
      return;
    }
    
    getDeck(title).then(result => {
      if(result === undefined)
      {
        addDeck(title).then(() => {
          setStatusMessage("");
          setTitle("");
          navigateToDeckDetails(navigation, title);
        });
      }
      else setStatusMessage(`There is already a deck called ${title}`);
    })
  };

    return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>Create a new Deck</Text>
      <TextInput placeholder="Enter a Title" value={title} onChangeText={(t) => setTitle(t)}></TextInput>
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
  

export default AddDeck;
