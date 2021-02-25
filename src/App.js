import React, {Fragment} from "react";
import Header from './components/header/Header';
import AppBody from './components/app-body/AppBody';

//TODO: Redux?

function App() {
  return (
      <Fragment>
        <Header/>
        <AppBody/>
      </Fragment>
  );
}

export default App;
