import { Home } from "./Home";
import { Route } from "react-router-dom";
import Pokemon from './Pokemon';

function AppViews() {
  return (
    <>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/:pokeId">
      <Pokemon />
    </Route>
    </>
  );
}

export default AppViews;
