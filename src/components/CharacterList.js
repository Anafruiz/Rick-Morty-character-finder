import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  //Sort user Name alphabetically
  const sortUserName = props.users.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });

  const userElements = sortUserName.map((user) => {
    return (
      <li className="characters__card" key={user.id}>
        <CharacterCard user={user} episodes={props.episodes} />
      </li>
    );
  });

  // Character doesn't exist
  const searchResults =
    props.users.length !== 0 ? (
      <ul className="characters">{userElements}</ul>
    ) : (
      <div className="characterResult">
        <span>
          This character doesn't exist <i className="far fa-thumbs-down"></i>
        </span>
        <span className="characterResult__span">Try again!</span>
      </div>
    );
  return <section>{searchResults}</section>;
};

CharacterList.propTypes = {
  users: PropTypes.array.isRequired,
  id: PropTypes.number,
};
export default CharacterList;
