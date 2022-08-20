import { GridItem } from "@chakra-ui/react";
import React from "react";

export default function Producto({ item, color, alertHolaMundo, text }) {
  return (
    <div style={{ backgroundColor: "black", margin: "5px", color: color }}>
      <h2>PRODUCTOS</h2>
      <button onClick={alertHolaMundo}>{text}</button>
      <p> {item.id} </p>
      <p> {item.name} </p>
      <p>Precio $ {item.price} </p>
    </div>
  );
}
