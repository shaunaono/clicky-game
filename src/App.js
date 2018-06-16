import React, { Component } from "react";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Nav title="Spongebob and His Friends" />
      </Wrapper>
    );
  }
}

export default App;
