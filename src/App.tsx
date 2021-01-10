import * as React from "react";
import "./index.css";

import MainScreen from "./components/MainScreen"

import { StateProvider } from "./store";

function App() {
  return <StateProvider>
    <MainScreen/>
  </StateProvider>;
}
export default App;
