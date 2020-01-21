import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './view/Home';
import AddPost from './view/AddPost';
import Posts from './view/Posts';
import Contact from './view/Contact';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/addpost">
            <AddPost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
