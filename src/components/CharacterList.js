import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";
const CharacterList = (props) => {
  const userElements = props.users.map((user) => {
    return (
      <>
        <CharacterCard key={user.id} user={user} episodes={props.episodes} />
      </>
    );
  });

  const searchResults =
    props.users.length !== 0 ? (
      <ul className="characters">{userElements}</ul>
    ) : (
      <p>No hay ninguna coincidencia</p>
    );
  return <section>{searchResults}</section>;
};
export default CharacterList;
