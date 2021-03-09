import PropTypes from "prop-types";
import FilterBySpecies from "./FilterBySpecies";

const FilterByEpisodes = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "episodes",
    });
  };
  console.log("espi", props.episodes);
  return (
    <label className="form__label" htmlFor="name">
      episodes:
      <input
        value={props.episodes}
        onChange={handleChange}
        className="form__input"
        type="text"
        placeholder="Search a episode"
        name="episodes "
        id="episodes"
      />
    </label>
  );
};

export default FilterByEpisodes;
