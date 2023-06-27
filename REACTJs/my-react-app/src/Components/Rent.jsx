import RentDisplay from "./RentDisplay";

const Rent = function () {
  const forRent = [
    {
      name: "Camela Homes Bldg. 43",
      price: "900000",
      address: "Bulacan",
      src: "home1.jpg",
    },
    {
      name: "Ligaya Homes Bldg. A8",
      price: "1500000",
      address: "1500000",
      src: "home2.jpg",
    },
    {
      name: "Primary Home Bldg. 456",
      price: "2000000",
      address: "Cebu",
      src: "home3.jpg",
    },
  ];

  return (
    <div>
      <h1>Homes for Rent</h1>
      {forRent.map((home) => (
        <RentDisplay
          name={home.name}
          price={home.price}
          address={home.address}
          src={home.src}
        />
      ))}
    </div>
  );
};

export default Rent;
