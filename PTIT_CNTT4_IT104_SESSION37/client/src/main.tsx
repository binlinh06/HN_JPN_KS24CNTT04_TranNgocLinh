import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";

import './index.css'
import store from "./stores/stores.ts";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
      <App />
  </Provider>
);
