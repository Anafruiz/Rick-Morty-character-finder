import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  if (props.user === undefined) {
    return <h1>usuario no encontrado</h1>;
  } else {
    return (
      <>
        <section>
          <img src={props.user.image} alt="" />
          <ul>
            <li>{props.user.name}</li>
            <li>{props.user.status}: </li>
            <li>Especie:{props.user.species}</li>
            <li>Origen </li>
            <li>Episodes:{props.user.episode.length}</li>
          </ul>{" "}
          <Link to="/" className="" title="Back to character list">
            Return
          </Link>
        </section>
      </>
    );
  }
};
export default CharacterDetail;
