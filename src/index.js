import React from 'react';
import { StatusBar } from 'react-native'

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Routes />
    </>
  )
}
export default App;
