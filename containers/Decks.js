import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import DeckComponent from '../components/DeckComponent';
import { clearDecks, getDecks } from '../api/decks'; 

const Decks = ({navigation, isFocused}) => {
  const [decks, setDecks] = useState({});
  const [fetched, setFetched] = useState(false);

  const fetchDecks = () => {
    getDecks().then(result => {
      setDecks(JSON.parse(result));
      setFetched(true);
    });
  }

  useEffect(() => {
    if(!fetched && isFocused) fetchDecks();
    if(fetched && !isFocused) setFetched(false);
  },[setFetched, fetched, isFocused]);

    return (
    <View style={styles.container}>
      {Object.keys(decks).map(key =>
        <DeckComponent
          navigation={navigation}
          title={decks[key].title}
          id={key}
          key={key}
          size={decks[key].questions.length}/>)}
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


export default(withNavigationFocus(Decks))
