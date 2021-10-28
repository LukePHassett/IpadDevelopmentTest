import "./styles.css";

import Router from "./Router";

import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {}
const App = ({}: Props) => {
  return <Router />;
};

ReactDOM.render(<App />, document.getElementById("app"));
export default App;
