import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter }                    from "react-router-dom";
import  "./assets/scss/style.scss";

const queryClient = new QueryClient();
const root        = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
             <App />
        </QueryClientProvider>
    </BrowserRouter>
);
