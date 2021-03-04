import { Link } from "react-router-dom";
const CharacterCard = (props) => {
  return (
    <>
      <li className="characters__card">
        <Link to={`/user/${props.user.id}`} className="link">
          <img
            className="characters__img"
            src={props.user.image}
            alt="foto del personaje"
          />
          <h2 className="characters__name">{props.user.name} </h2>
          <p className="characters__species">Especie: {props.user.species}</p>
        </Link>
      </li>
    </>
  );
};
export default CharacterCard;
