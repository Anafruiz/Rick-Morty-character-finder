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
  const [origin, setOrigin] = useState([]);
  const [gender, setGender] = useState([]);

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
    } else if (data.key === "origin") {
      console.log("console", data.value);
      const indexOrigin = origin.indexOf(data.value);
      if (indexOrigin === -1) {
        const newOrigin = [...origin, data.value];
        setOrigin(newOrigin);
        console.log(newOrigin);
      } else {
        const newOrigin = [...origin];
        newOrigin.splice(indexOrigin, 1);
        setOrigin(newOrigin);
        console.log(newOrigin);
      }
    } else if (data.key === "gender") {
      const indexGender = gender.indexOf(data.value);
      if (indexGender === -1) {
        const newGenderArray = [...gender, data.value];
        setGender(newGenderArray);
        console.log(newGenderArray);
      } else {
        const newGenderArray = [...gender];
        newGenderArray.splice(indexGender, 1);
        setGender(newGenderArray);
        console.log(newGenderArray);
      }
    }
  };
  const resetInputs = () => {
    setName("");
    setSpecies("all");
    setOrigin([]);
    setGender([]);
  };

  const newOrigin = users.map((user) => user.origin);
  const OriginList = [...new Set(newOrigin)];

  const newGender = users.map((user) => user.gender);
  const genderList = [...new Set(newGender)];
  //Filter
  const filteredUsers = users
    .filter((user) => {
      return user.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((user) => {
      return species === "all" ? true : user.species === species;
    })
    .filter((user) => {
      if (origin.length === 0) {
        return true;
      } else {
        return origin.includes(user.origin);
      }
    })
    .filter((user) => {
      if (gender.length === 0) {
        return true;
      } else {
        return gender.includes(user.gender);
      }
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
            origin={origin}
            resetInputs={resetInputs}
            OriginList={OriginList}
            genderList={genderList}
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
