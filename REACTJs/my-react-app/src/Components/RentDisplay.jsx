import "../css/RentDisplayStyle.css";

const RentDisplay = function (props) {
  return (
    <div>
      <img class="home_prev" src={require("../img/" + props.src)} />
      <p>
       <b> Name:</b> {props.name}
      </p>
      <p className={props.price < 1000000 ? "green" : "red"}>
        <b>Price:</b> {props.price}
      </p>
      <p>
        <b>Address:</b> {props.address}
      </p>
    </div>
  );
};

export default RentDisplay;
