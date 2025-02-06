import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter }                    from "react-router-dom";
import "./assets/scss/setting/__font.css";
import "./assets/scss/setting/__vars.css";
import "./assets/scss/setting/__mixin.css";
import "./assets/scss/setting/__reset.css";

import "./assets/scss/section/__header.css";
import "./assets/scss/section/__main.css";
import "./assets/scss/section/__footer.css";
import "./assets/scss/section/__section1.css";
import "./assets/scss/section/__section2.css";
import "./assets/scss/section/__section3.css";
import "./assets/scss/section/__gameInfoHeader.css";
import "./assets/scss/section/__gameInfo.css";

const queryClient = new QueryClient();
const root        = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
             <App />
        </QueryClientProvider>
    </BrowserRouter>
);
