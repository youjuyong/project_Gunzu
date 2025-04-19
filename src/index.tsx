import React        from 'react';
import ReactDOM     from 'react-dom/client';
import App          from './App';
import store  from 'utils/reducer';
import { QueryClient, QueryClientProvider  }  from "react-query";
import { BrowserRouter }                      from "react-router-dom";
import { legacy_createStore as createStore }  from 'redux';
import { Provider }                           from 'react-redux';

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import "./assets/scss/setting/__font.css";
import "./assets/scss/setting/__vars.css";
import "./assets/scss/setting/__mixin.css";
import "./assets/scss/setting/__reset.css";

import "./assets/scss/section/__modalCss.css";
import "./assets/scss/section/__equipment.css";
import "./assets/scss/section/__event.css";
import "./assets/scss/section/__header.css";
import "./assets/scss/section/__login.css";
import "./assets/scss/section/__main.css";
import "./assets/scss/section/__footer.css";
import "./assets/scss/section/__section1.css";
import "./assets/scss/section/__section2.css";
import "./assets/scss/section/__section3.css";
import "./assets/scss/section/__gameInfoHeader.css";
import "./assets/scss/section/__gameInfo.css";
import "./assets/scss/section/__statics.css";


import "./assets/scss/setting/__skeleton.css";
const queryClient = new QueryClient();
const root        = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
let persistor     = persistStore(store);


root.render(
    <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
