import React from "react";

function ClothesList() {
  const clothes = [
    { id: 1, name: "shirt", price: 13 },
    { id: 2, name: "pants", price: 20 },
    { id: 3, name: "jacket", price: 170 },
  ];
  return (
    <div>
      <ul>
        {clothes.map((clothe) => (
          <li key={clothe.id}>
            <h1>{clothe.name}</h1>
            <p> is {clothe.price} $</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClothesList;
