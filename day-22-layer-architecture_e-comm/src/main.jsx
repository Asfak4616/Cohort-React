import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { Store } from "./app/Store.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <AppRoutes />
  </Provider>,
);