import * as React from "react";
import "./index.css";

import { StateProvider } from "./store";

function App() {
  return <StateProvider>
    <div></div>
  </StateProvider>;
}
export default App;
