import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import { getDeck, removeDeck, removeCardFromDeck } from '../api/decks';
import { DECK_ID, INDEX, navigateToAddCard } from '../helpers/navigation';
import CardComponent from '../components/CardComponent';
import ButtonWrapper from '../components/ButtonWrapper';

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
    <ScrollView contentContainerStyle={styles.container}>
      {deck !== null 
        ? <>
          <Text style={styles.text}>{deckId}</Text>
          <Text style={styles.text}>Size: {size} cards</Text>
          <ScrollView contentContainerStyle={styles.cards}>
            {deck.questions.map((q, i) => 
            <CardComponent 
              deleteCard={() => {
                removeCardFromDeck(deckId, i);
                setFetched(false);}}
              editCard={() => navigateToAddCard(navigation, deckId, i, true, q)}
              key={i}
              question={q.question}
              />)}
          </ScrollView>
          <ButtonWrapper title="Add Card" onPress={() => navigateToAddCard(navigation, deckId, size)}/>
          <ButtonWrapper
            disabled={size === 0}
            title="Start Quiz"
            onPress={() => navigation.navigate('Quiz', { DECK_ID: deckId })}/>
          <ButtonWrapper title="Delete Deck" onPress={() => removeDeck(deckId).then(navigation.navigate('Decks'))}/>
        </>
        : <Text>loading...</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
    cards: {
      width: "100%",
      backgroundColor: '#fff',
    },
    text: {
      textAlign: 'center',
    }
  });
  

export default withNavigationFocus(DeckDetails);
