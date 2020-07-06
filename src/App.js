import React, { Component } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";
import Profile from "./Components/profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/news/News";
import { BrowserRouter, Route } from "react-router-dom";
import { addPost } from "./redux/state";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>
          <div className="col-md-8">
            <Route
              path="/profile"
              render={() => (
                <Profile state={props.state.profilePage} addPost={addPost} />
              )}
            />
            <Route
              path="/dialogs"
              render={() => <Dialogs state={props.state.messagesPage} />}
            />
            <Route path="/news" render={() => <News />} />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
