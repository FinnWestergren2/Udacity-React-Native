import React, { useEffect } from 'react';

import TabNav from './TabNav';
import { setNotification } from '../api/notifications';

const App = () => {
    useEffect(() => {
        setNotification();
    }, [])

    return <TabNav/>
};

export default App;
