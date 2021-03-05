import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  const handleInput = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="form">
      <form className="form__container" onSubmit={handleInput}>
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
