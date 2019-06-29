import { createStackNavigator } from 'react-navigation';
import DeckDetails from './DeckDetails';
import Decks from './Decks';
import AddCard from './AddCard';
import Quiz from './Quiz';

const StackNav = createStackNavigator({
    "Decks": {
        screen: Decks
    },
    "DeckDetails": {
        screen: DeckDetails
    },
    "AddCard":{
        screen: AddCard
    },
    "Quiz":{
        screen: Quiz
    }
    },
    {
        resetOnBlur: true
    });

export default StackNav;