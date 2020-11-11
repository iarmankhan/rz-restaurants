import React from 'react';
import {
  CSSReset,
} from '@chakra-ui/core';
import Header from "./components/Header/Header.component";
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/Home.page";

function App() {
  return (
    <>
      <CSSReset />
      <Header/>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;
