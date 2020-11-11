import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from "@chakra-ui/theme";
import {ChakraProvider} from "@chakra-ui/core";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
