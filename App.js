import 'react-native-gesture-handler';
import React, {useEffect, useContext} from 'react';
import MainNavigator from './navigation/MainNavigator';
import NewsProvider from './store/providers/NewsProvider';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from './components/SplashScreen';

const App = () => {
  return (
    <PaperProvider>
      <NewsProvider>
        <MainNavigator />
      </NewsProvider>
    </PaperProvider>
  );
};

export default App;
