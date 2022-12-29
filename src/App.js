//  React & Provider
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

// Token
import { isExpired, decodeToken } from "react-jwt";

// Style
import "antd/dist/antd.min.css";
import "./assets/css/_styles.scss";

// Redux
import store from "./redux/store";
import actions from "./redux/actions";

// Pages
import Login from "./pages/Login/Login";

function App() {
  const token = localStorage.getItem('token');

  const [isLogin] = useState(!isExpired(token))
  const decodedToken = decodeToken(token);

  console.log(isLogin)

  useEffect(() => {
    store.dispatch({ type: actions.SET_USER_INFO, payload: decodedToken })
  }, [decodedToken])


  return (
    <Provider store={store}>
      <Router basename="">
        <Switch>
          <Route exact path="/">
            {isLogin ? <Redirect to="/Movies/Movies" /> : <Login />}
          </Route>
          <Route path="/:any">
            <div>test pages..</div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
