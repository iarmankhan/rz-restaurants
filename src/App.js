import React from 'react';
import {
  CSSReset,
} from '@chakra-ui/core';
import Header from "./components/Header/Header.component";
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/Home.page";
import Restaurants from "./pages/Restaurants/Restaurants.page";

function App() {
  return (
    <>
      <CSSReset />
      <Header/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/:cityId' exact component={Restaurants} />
      </Switch>
    </>
  );
}

export default App;
