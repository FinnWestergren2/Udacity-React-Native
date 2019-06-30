import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import DeckComponent from '../components/DeckComponent';
import { getDecks } from '../api/decks'; 

const Decks = ({navigation, isFocused}) => {
  const [decks, setDecks] = useState({});
  const [fetched, setFetched] = useState(false);

  const fetchDecks = () => {
    getDecks().then(result => {
      parsed = JSON.parse(result)
      setDecks(parsed);
      setFetched(true);
    });
  }

  useEffect(() => {
    if(!fetched && isFocused) fetchDecks();
    if(fetched && !isFocused) setFetched(false);
  }, [setFetched, fetched, isFocused]);

    return (
    <ScrollView style={styles.container}>
      {(!decks || Object.keys(decks).length === 0) &&
      <>
        <Text>You don't have any decks yet.</Text>
        <Text>Add a deck to get started.</Text>
      </>}
      {decks && 
      <>
      {Object.keys(decks).map(key =>
        <DeckComponent
          navigation={navigation}
          title={decks[key].title}
          id={key}
          key={key}
          size={decks[key].questions.length}/>)}
      </>}
    </ScrollView>
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


export default(withNavigationFocus(Decks))
