import * as React from "react";
import { createRoot } from "react-dom/client"
import TotalsContextProvider from "./context/TotalsContext.jsx";
import BaristaContextProvider from "./context/BaristaContext.jsx";
import App from './app.jsx';
import './index.css'

let root = createRoot(document.getElementById('root'));

root.render(
  <BaristaContextProvider>
    <TotalsContextProvider>
      <App />      
    </TotalsContextProvider>
  </BaristaContextProvider>
);
