import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { getDeck, addDeck } from '../api/api';

const AddDeck = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const submit = () => {
    setStatusMessage('Submitting...');
    console.log(statusMessage)
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
          const NavAction = NavigationActions.navigate({ params: { id: title }, routeName: 'DeckDetails'});
          navigation.dispatch(NavAction);
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
