Welcome to the Quiz App!

# Compatible Systems #
This application will work on Android. iOS compatibility not garunteed.

# Getting started #
To install, use yarn install
To start, use yarn start
However your preferred me

# Deck Tab #
This tab is where everything happens. It contains a Stack Navigator, so this is where the Decks, Deck Details, Add Card, and Quiz features live.

# Add Deck Tab #
This is where you can add a Deck to the list. It wont let you have an empty string as a title.
Submitting navigates to the deck details of the page you were just in.

# Decks Page #
This is where the list of decks is. Each deck is listed within a "deckComponent". 
Touching a deckComponent will take you to the Deck Details page.

# Deck Details Page #
Has a list of cards (or "cardComponents") and a set of buttons:

Deleting a deck will navigate you back to the decks page.
Starting a quiz will navigate you to the quiz page.
touching "Add Card" will take you to the Add Card Page

Once a card is created it will appear in the deck details page and can be edited or deleted.

# Add Card Page #
Add/Edit a card here! Will deny empty answers or questions
Submitting pops the stack navigator back to the deck details page.

# Quiz Page #
Take the quiz! Will delete any pending reminders upon completion.

# Other Info #
2 APIs: deck mgmt and notification mgmt for Async storage
1 helper file with frequently used stuff for navigation
Used React hooks for component state and lifecycle

Enjoy my App!
