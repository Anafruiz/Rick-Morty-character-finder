import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <Link to={`/user/${props.user.id}`} className="link">
      <img
        className="characters__img"
        src={props.user.image}
        alt="foto del personaje"
      />
      <h2 className="characters__name">{props.user.name} </h2>
      <p className="characters__species">Specie: {props.user.species}</p>
      <li className="characterDetail__episodes">Tipo: {props.user.type}</li>
    </Link>
  );
};
CharacterCard.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  imagen: PropTypes.string,
  id: PropTypes.number,
};
export default CharacterCard;
