import * as React from "react";
import { createRoot } from "react-dom/client"
import TotalsContextProvider from "./context/TotalsContext.jsx";
import BaristasContextProvider from "./context/BaristasContext.jsx";
import App from './app.jsx';
import './index.css'

let root = createRoot(document.getElementById('root'));

root.render(
  <BaristasContextProvider>
    <TotalsContextProvider>
      <App />      
    </TotalsContextProvider>
  </BaristasContextProvider>
);
