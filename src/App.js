import React from 'react';
import { Route } from 'react-router-dom';

import MessengerContainer from './containers/messenger/MessengerContainer';

export default()=>(
    <div>
      <Route exact path='/' component={MessengerContainer}/>
    </div>
  )
