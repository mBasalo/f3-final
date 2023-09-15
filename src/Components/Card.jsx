import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ props, isFav = false }) => {

  const { theme, addFav, removeFav } = useContext(ContextGlobal)

  return (
    <div className="card" style={{backgroundColor: theme.cardBg }}>
      <img src="/images/doctor.jpg" alt="" className="doctorImg"/>
      <h3>{props.name}</h3>
      <h4>{props.username}</h4>
      <p>ID: {props.id}</p>

      <Link to={"/dentist/" + props.id} style={{ marginBottom: 10, color: "red" }}>Ver mas</Link>

      {!isFav ? <button onClick={() => addFav(props, alert('Has añadido un odontologo a tus favoritos') )} className="favButton" >Agregar a favoritos</button>
        : <button className="borrar" onClick={() => removeFav(props.id, alert('Oontologo eliminado'))}>Eliminar</button>}
    </div>
  );
};

export default Card;