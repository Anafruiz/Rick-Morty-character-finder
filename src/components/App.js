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
  const [episodes, setEpisodes] = useState("");
  const [type, setType] = useState("");

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
    } else if (data.key === "episodes") {
      setEpisodes(data.value);
    } else if (data.key === "type") {
      setType(data.value);
    }
  };
  const resetInputs = () => {
    setName("");
    setSpecies("all");
    setEpisodes("");
    setType("");
  };
  //Filter
  const filteredUsers = users
    //byname
    .filter((user) => {
      return user.name.toLowerCase().includes(name.toLowerCase());
    })
    //bytype
    .filter((user) => {
      return user.type.toLowerCase().includes(type.toLowerCase());
    })
    //episode
    .filter((user) => {
      return episodes === 0 || episodes === ""
        ? true
        : user.episode.length === parseInt(episodes);
    })
    //especies
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
          <Filters
            handleFilter={handleFilter}
            name={name}
            species={species}
            resetInputs={resetInputs}
            episodes={episodes}
            type={type}
          />
          <CharacterList users={filteredUsers} />
          <Footer />
        </Route>
        <Route path="/user/:id" render={renderUser} />
      </Switch>
    </>
  );
};
export default App;
