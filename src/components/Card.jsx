

import React from 'react';

const Card = ({ item }) => {
  return (
    <div  className="card" style={{ width: '18rem'}}>
      <img
        className="card-img-top"
        src="https://static.vecteezy.com/system/resources/thumbnails/020/185/984/small_2x/placeholder-icon-design-free-vector.jpg"
        alt="Card cap"
      />
      <div className="card-body">
        <p className="card-text">{item.id}</p>
        <p className="card-text">{item.name.slice(0,20)}</p>
        <p className="card-text">{item.email}</p>
      </div>
    </div>
  );
};

export default Card;
