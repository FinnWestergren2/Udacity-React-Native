import { createStackNavigator } from 'react-navigation';
import DeckDetails from './DeckDetails';
import Decks from './Decks';
import AddCard from './AddCard';

const DeckStack = createStackNavigator({
    "Decks": {
      screen: Decks
    },
    "DeckDetails": {
      screen: DeckDetails
    },
    "AddCard":{
        screen: AddCard
    }
  });

export default DeckStack;