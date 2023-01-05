import * as React from "react";
import { createRoot } from "react-dom/client"
import BaristaContextProvider from "./context/BaristaContext.jsx";
import App from './app.jsx';

let root = createRoot(document.getElementById('root'));

root.render(
    <BaristaContextProvider>
      <App />
    </BaristaContextProvider>
);