import { Component } from "react";

class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: 0,
      height: 0,
      area: 0,
    };
  }

  solveArea = (event) => {
    event.preventDefault();
    let b = event.target.base.value;
    let h = event.target.height.value;
    let c = event.target.popup.checked;
    let a = (h * b) / 2;
    this.setState({ area: a });
    this.setState({ base: b });
    this.setState({ height: h });
    if (c) {
      alert(a);
    }
  };

  render() {
    return (
      <>
        <h1>Triangle Area Solver</h1>
        <form onSubmit={this.solveArea}>
          <label>Base: </label>
          <input type="text" name="base" class="form-text mx-4 mt-3" />
          <br />
          <label>Height: </label>
          <input type="text" name="height" class="form-text mx-2 my-3" />
          <br />
          <input type="checkbox" name="popup" />
          Display as popup?
          <br />
          <input type="submit" class="btn btn-primary mt-3" />
          <br />
        </form>
        <div>
          <h2>Results</h2>
          <p>Base: {this.state.base}</p>
          <p>Height: {this.state.height}</p>
          <p>Area: {this.state.area}</p>
        </div>
      </>
    );
  }
}

export default Triangle;
