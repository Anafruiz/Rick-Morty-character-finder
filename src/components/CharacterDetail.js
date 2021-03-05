import { Link } from "react-router-dom";
import logo from "../images/angry.jpg";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  const renderStatus = () => {
    if (props.user.status === "Alive") {
      return <i className=" fas fa-heartbeat"></i>;
    } else if (props.user.status === "Dead") {
      return <i className=" fas fa-skull-crossbones"></i>;
    } else if (props.user.status === "unknown") {
      return <i className=" fas fa-question"></i>;
    }
  };
  if (props.user === undefined) {
    return (
      <div className="notFound">
        <h1>
          User not found!<i class="far fa-sad-tear"></i>{" "}
        </h1>
        <img className="notFound__img" src={logo} />
      </div>
    );
  } else {
    return (
      <>
        <section className="characterDetail">
          <div className="characterDetail__card">
            <img
              className="characterDetail__img"
              src={props.user.image}
              alt=""
            />
            <ul className="characterDetail__item">
              <li className="characterDetail__name">{props.user.name}</li>
              <div className="characterDetail__container1">
                <li className="characterDetail__status">
                  Status: {renderStatus()}
                </li>
                <li className="characterDetail__species">
                  Specie: {props.user.species}
                </li>
              </div>
              <div className="characterDetail__container2">
                <li className="characterDetail__origen">
                  Origin: {props.user.origin}{" "}
                </li>
                <li className="characterDetail__episodes">
                  Episodes: {props.user.episode.length}
                </li>
              </div>
            </ul>{" "}
            <Link to="/" className="link" title="Back to user list">
              <button className="characterDetail__button">
                <i className="fas fa-undo"></i>
              </button>
            </Link>
          </div>
        </section>
      </>
    );
  }
};
CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  species: PropTypes.string,
  episodes: PropTypes.number,
};
export default CharacterDetail;
