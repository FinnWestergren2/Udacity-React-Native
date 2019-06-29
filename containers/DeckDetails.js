import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import { getDeck, removeDeck, removeCardFromDeck } from '../api/decks';
import { DECK_ID, INDEX, navigateToAddCard } from '../helpers/navigation';
import CardComponent from '../components/CardComponent';

const DeckDetails = ({navigation, isFocused}) => {
  const [deck, setDeck] = useState(null);
  const [size, setSize] = useState(0);
  const [fetched, setFetched] = useState(false);
  const deckId = navigation.getParam(DECK_ID);

  const fetchDeck = () => {
    setFetched(true);
    getDeck(deckId).then(result => {
      setDeck(result);
      setSize(result.questions.length);
    });
  }

  useEffect(() => {
    if(!fetched && isFocused) fetchDeck();
    if(fetched && !isFocused) setFetched(false);
  },[setFetched, fetched, isFocused]);

  return (
    <View style={styles.container}>
      {deck !== null 
        ? <>
          <Text>{deckId}</Text>
          <Text>Size: {size} cards</Text>
          {deck.questions.map((q, i) => 
          <CardComponent 
            deleteCard={() => {
              removeCardFromDeck(deckId, i);
              setFetched(false);}}
            editCard={() => navigateToAddCard(navigation, deckId, i, true, q)}
            key={i}
            question={q.question}
            />)}
          <Button title="Add Card" onPress={() => navigateToAddCard(navigation, deckId, size)}/>
          <Button
            disabled={size === 0}
            title="Start Quiz"
            onPress={() => navigation.navigate('Quiz', { DECK_ID: deckId })}/>
          <Button title="Delete Deck" onPress={() => removeDeck(deckId).then(navigation.navigate('Decks'))}/>
        </>
        : <Text>loading...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 100,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default withNavigationFocus(DeckDetails);
