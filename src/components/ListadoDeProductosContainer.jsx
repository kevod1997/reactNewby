import React from "react";
import ListadoDeProductosLayout from "./ListadoDeProductosLayoutListadoDeProductosLayout";

export default function ListadoDeProductosContainer() {
  const productos = [
    { id: 100, name: "zapato", precio: 100 },
    { id: 101, name: "zapato", precio: 102 },
    { id: 102, name: "zapato", precio: 100 },
    { id: 103, name: "zapato", precio: 100 },
  ];

  //fetch("pokeapi.com/pokes" / json)
  //normal //ordenar
  //paginar
  //decidir largo de cada pagina

  return <ListadoDeProductosLayout productos={productos} />;
}
