import React from "react";
import Header from './components/header/Header';
import AppBody from './components/app-body/AppBody';
import configureStore from './redux/store/store';
import { Provider } from 'react-redux'


const store = configureStore()

function App() {
  return (
      <Provider store={store}>
        <Header/>
        <AppBody/>
      </Provider>
  );
}

export default App;
