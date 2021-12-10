import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { useGlobalContext } from "./Context";
import { auth } from "./firebase";

const App = () => {
  const [, dispatch] = useGlobalContext();
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
