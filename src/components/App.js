import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("all");

  useEffect(() => {
    getDataFromApi().then((data) => {
      setUsers(data);
    });
  }, []);

  //Event Handlers
  const handleFilter = (data) => {
    if (data.key === "name") {
      setName(data.value);
    } else if (data.key === "species") {
      setSpecies(data.value);
    }
  };
  //Filter
  const filteredUsers = users
    .filter((user) => {
      return user.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((user) => {
      return species === "all" ? true : user.species === species;
    });

  const renderUser = (props) => {
    const foundUser = users.find((user) => {
      return user.id === parseInt(props.match.params.id);
    });

    return <CharacterDetail user={foundUser} />;
  };
  return (
    <>
      <Switch>
        <Route exact path="/" component={App}>
          <Header />
          <Filters handleFilter={handleFilter} name={name} />
          <CharacterList users={filteredUsers} />
          <Footer />
        </Route>
        <Route path="/user/:id" render={renderUser} />
      </Switch>
    </>
  );
};
export default App;
