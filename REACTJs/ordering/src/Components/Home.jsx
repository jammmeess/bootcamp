import React, { Component } from "react";
import "../css/styles.css";

class Home extends Component {
  render() {
    return (
      <>
        <body>
          <div class="container mt-5">
            <div class="welcome">
              <div class="row">
                <div class="col-lg-12 my-5 py-5 text-center">
                  <h1>Welcome to Oso Resto</h1>
                  <a href="/ordering">
                    <button class="btn btn-primary">Order Now!</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default Home;
