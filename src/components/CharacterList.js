import CharacterCard from "./CharacterCard";
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
      <>
        <CharacterCard key={user.id} user={user} episodes={props.episodes} />
      </>
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
export default CharacterList;
