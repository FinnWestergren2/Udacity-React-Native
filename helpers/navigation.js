export const DECK_ID = "DECK_ID";
export const INDEX = "INDEX";
export const REPLACE = "REPLACE";
export const CARD = "CARD";

export const navigateToDeckDetails = (navigation, deckId) => 
    navigation.navigate('DeckDetails', {DECK_ID: deckId});

export const navigateToAddCard = (navigation, deckId, index, replace = false, card = {}) => 
    navigation.navigate('AddCard', { DECK_ID: deckId, INDEX: index, REPLACE: replace, CARD: card });
