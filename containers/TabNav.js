import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import StackNav from './StackNav';
import AddDeck from './AddDeck';

const Tabs = createBottomTabNavigator({
  "Decks": {
    screen: StackNav,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='list-alt' size={30} color='purple'/>
    }
  },
  "Add Deck": {
    screen: AddDeck,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='plus' size={30} color='purple'/>
    }
  }},
  {
    resetOnBlur: true
  });

export default createAppContainer(Tabs);
