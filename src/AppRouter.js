import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
//import HomePage from "./HomePage"
import PageNotFound from "./PageNotFound";
import ShowStories from "./components/ShowStories";

// src refer to https://github.com/myogeshchavan97/hackernews-clone-react-app
// guide refer to https://www.freecodecamp.org/news/how-to-build-a-hacker-news-clone-using-react/

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!["top", "new", "best"].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
