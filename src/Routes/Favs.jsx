
import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


export const Favs = () => {

  const { state } = useContext(ContextGlobal)


  return (
    <div className="favs">
      <h2>Dentistas Favoritos</h2>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {
          state.favs.length < 1
            ? ''
            : state.favs.map(elem => <Card key={elem.id} props={elem} isFav={true}/>)
        }
      </div>
    </div>
  );
};