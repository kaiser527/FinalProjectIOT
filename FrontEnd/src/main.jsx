import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import IntlProviderWrapper from "./hoc/IntlProviderWrapper";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <IntlProviderWrapper>
          <App />
        </IntlProviderWrapper>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
