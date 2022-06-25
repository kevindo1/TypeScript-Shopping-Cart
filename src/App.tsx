import { useState } from "react";
import { useQuery } from "react-query";
// Components imports
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
// Styles imports
import { Wrapper } from "./App.styles";

// first await is to convert it to json, second await is the actual fetch of the API
const getProducts = async () =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  return <div className="App">Hello World</div>;
};

export default App;
