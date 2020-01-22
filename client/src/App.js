import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './view/home/Home';
import AddPost from './view/addPost/AddPost';
import Posts from './view/posts/Posts';
import Contact from './view/contact/Contact';
import ReadMore from './view/readMore/ReadMore';

import './reset.css';

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
          <Route path="/post/:id" component={ReadMore} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
