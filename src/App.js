import React from 'react';
import {CSSReset,} from '@chakra-ui/core';
import Header from "./components/Header/Header.component";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home/Home.page";
import Restaurants from "./pages/Restaurants/Restaurants.page";
import Restaurant from "./pages/Restaurant/Restaurant.page";

function App() {
    return (
        <>
            <CSSReset/>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/city/:cityId' exact component={Restaurants}/>
                <Route path='/restaurant/:restaurantId' exact component={Restaurant}/>
            </Switch>
        </>
    );
}

export default App;
