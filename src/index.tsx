import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter }                    from "react-router-dom";
import "./assets/scss/setting/__font.scss";
import "./assets/scss/setting/__vars.scss";
import "./assets/scss/setting/__mixin.scss";
import "./assets/scss/setting/__reset.scss";

import "./assets/scss/section/__header.scss";
import "./assets/scss/section/__main.scss";
import "./assets/scss/section/__footer.scss";
import "./assets/scss/section/__section1.scss";
import "./assets/scss/section/__section2.scss";
import "./assets/scss/section/__section3.scss";
import "./assets/scss/section/__gameInfoHeader.scss";
import "./assets/scss/section/__gameInfo.scss";

const queryClient = new QueryClient();
const root        = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
             <App />
        </QueryClientProvider>
    </BrowserRouter>
);
