import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = "Udacicards:decks";

export const clearDecks = () => {
    return AsyncStorage.setItem(DECK_STORAGE_KEY,"{}");
};

export const getDecks = () => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY);
};

export const getDeck = async (id) => {
    const decks = await getDecks();
    return JSON.parse(decks)[id]
};

export const addDeck = (title) => {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: { title: title, questions: [] }
    }));
};

export const addCardToDeck = (title, card, index, replace) => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results);
        data[title].questions.splice(index, (replace ? 1 : 0), card);
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
    });
};

export const removeDeck = (id) => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results);
        data[id] = undefined;
        delete data[id];
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
    });
};

export const removeCardFromDeck = (deckTitle, cardIndex) => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results);
        data[deckTitle].questions.splice(cardIndex, 1);
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
    });
};
