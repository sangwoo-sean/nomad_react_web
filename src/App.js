import React from "react";
import PropTypes from "prop-types";

function Stock({ent, price}) {
  return <div>I bought {ent} when it was {price} won</div>;
}

const companies = [
  {id:0, title:"apple", price:10}, 
  {id:1, title:"tesla", price:8}, 
  {id:2, title:"samsung", price:15}
];

Stock.propTypes = {
  ent: PropTypes.string.isRequired,
  price: PropTypes.number
};

function App() {
  return (
    <div>
      {companies.map(x =>
        <Stock key={x.id} ent={x.title} price={x.price}/>)}
    </div>
  );
}

export default App;
