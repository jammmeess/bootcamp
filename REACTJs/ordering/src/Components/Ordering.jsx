import React, { Component } from "react";

class Ordering extends Component {
  render() {
    return (
      <>
        <div class="container mt-5 mx-5">
          <div class="order">
            <h1 class="display-1">Order</h1>
            <div class="row mb-3">
              <div class="col-lg-1">
                <img
                  src={require("../img/burger.png")}
                  class="img-fluid"
                  alt="Burger"
                />
                <p>Burger - ₱60.00</p>
              </div>
              <div class="col-lg-1">
                <img
                  src={require("../img/steak.png")}
                  class="img-fluid"
                  alt="Steak"
                />
                <p>Steak - ₱80.00</p>
              </div>
              <div class="col-lg-1">
                <img
                  src={require("../img/fries.png")}
                  class="img-fluid"
                  alt="Fries"
                />
                <p>Fries - ₱50.00</p>
              </div>
              <div class="col-lg-1">
                <img
                  src={require("../img/salad.png")}
                  class="img-fluid"
                  alt="Salad"
                />
                <p>Salad - ₱70.00</p>
              </div>
              <div class="col-lg-1">
                <img
                  src={require("../img/sprite.jpg")}
                  class="img-fluid"
                  alt="Sprite"
                />
                <p>Sprite - ₱25.00</p>
              </div>
              <div class="col-lg-1">
                <img
                  src={require("../img/icecream.png")}
                  class="img-fluid"
                  alt="ice Cream"
                />
                <p>Ice Cream - ₱25.00</p>
              </div>
              <div class="offset-1 col-lg-4">
                <form id="food-order">
                  <div class="form-group">
                    <label>Item: </label>
                    <select name="food" class="form-control" id="food-select">
                      <option selected disabled value="burger">
                        Select one
                      </option>
                      <option value="burger">Burger</option>
                      <option value="steak">Steak</option>
                      <option value="fries">Fries</option>
                      <option value="salad">Salad</option>
                      <option value="sprite">Sprite</option>
                      <option value="icecream">Ice Cream</option>
                    </select>
                    <label>Amount: </label>
                    <input
                      type="number"
                      class="form-control mb-2"
                      id="food-amount"
                      min="1"
                      max="9"
                      value="1"
                    />
                  </div>
                  <input type="submit" class="btn btn-primary" value="Order!" />
                </form>
              </div>
            </div>
            <div class="col-lg-12">
              <table class="table" id="food-table">
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Price</th>
                </tr>
              </table>
            </div>
            <div class="col-lg-12 mb-5">
              <h5>Sauce</h5>
              <input
                type="checkbox"
                class="form-check-input sauce"
                id="sauce1"
                name="vehicle1"
                value="buffalo"
              />
              <label for="sauce1"> Buffalo </label>
              <input
                type="checkbox"
                class="form-check-input sauce"
                id="sauce2"
                name="sauce2"
                value="gravy"
              />
              <label for="sauce2"> Gravy </label>
              <input
                type="checkbox"
                class="form-check-input sauce"
                id="sauce3"
                name="sauce3"
                value="sweet"
              />
              <label for="sauce3"> Sweet and Spicy </label>
              <input
                type="checkbox"
                class="form-check-input sauce"
                id="sauce4"
                name="sauce4"
                value="bbq"
              />
              <label for="sauce4"> Barbeque </label>
              <input type="checkbox" class="form-check-input" id="get_all" />
              <label for="get_all"> Get All! </label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Ordering;
