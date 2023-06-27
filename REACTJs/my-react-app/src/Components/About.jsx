import React, { Component } from "react";
import { greetings, goodbye } from "../js/greetings";

class About extends Component {
  render() {
    return (
      <>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button onClick={greetings}>Greet</button>
        <button onClick={goodbye}>Goodbye</button>
      </>
    );
  }
}

export default About;
