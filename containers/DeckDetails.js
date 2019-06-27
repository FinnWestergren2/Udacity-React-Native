import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getDeck, removeDeck } from '../api/api'
import { withNavigationFocus } from 'react-navigation';

const DeckDetails = ({navigation, isFocused}) => {
  const [deck, setDeck] = useState(null);
  const [fetched, setFetched] = useState(false);
  const deckId = navigation.getParam('id');

  const fetchDeck = () => {
    setFetched(true);
    getDeck(deckId).then(result => {
      setDeck(result);
    });
  }

  useEffect(() => {
    if(!fetched && isFocused) fetchDeck();
    if(fetched && !isFocused) setFetched(false);
  },[setFetched, fetched, isFocused]);

  return (
    <View style={styles.container}>
        {deck !== null 
          ?<><Text>{deck.title}</Text>
          {deck.questions.map((q, i) => <Text key={i}>{q.question}</Text>)}</>
          :<Text>loading...</Text>
        }
        <Button title="Add Card" onPress={() => navigation.navigate('AddCard', {deckId: deckId})}/>
        <Button title="Delete Deck" onPress={() => removeDeck(deckId).then(navigation.navigate('Decks'))}/>
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
  

export default withNavigationFocus(DeckDetails);
