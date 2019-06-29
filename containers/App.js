import React, { useEffect } from 'react';

import TabNav from './TabNav';
import { setNotification } from '../api/notifications';
import { getDecks, initializeDecks } from '../api/decks'; 

const App = () => {
    useEffect(() => {
        setNotification();
        getDecks().then(result => {
            if(!(JSON.parse(result))) initializeDecks();
        })
    }, [])

    return <TabNav/>
};

export default App;