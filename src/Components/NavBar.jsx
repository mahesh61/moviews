import React, { useState } from "react";
import "./navBar.css";
import logo from "../images/Icon.png";
import SearchForm from "./SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = ({ Search }) => {
  const [isShowSarch, setIsShowSarch] = useState(false);
  const [expression, setExpression] = useState(false);
  const [serachList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const SearchApi = (expression) => {
    const url = `https://imdb-api.com/API/SearchMovie/k_ph04pjso/${expression}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setSearchList(data.results);
      });
  };

  const hadleClick = (event) => {
    event.preventDefault();
    console.log(expression);
    SearchApi(expression);
    // calling the serach api by method here
    navigate("/search", { state: serachList });
  };

  return (
    <>
      <div className="navBar">
        <FontAwesomeIcon className="searchButton" icon={faBars} />
        <Link to="/">
          {" "}
          <img id="logo" src={logo} />
        </Link>
        <div id="form">
          <input
            type="search"
            id="q"
            name="query"
            placeholder="Search Movie Name Here......."
            onChange={(e) => setExpression(e.target.value)}
          />
          <button onClick={(e) => hadleClick(e)}>
            <svg viewBox="0 0 1024 1024">
              <path
                class="path1"
                d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"
              ></path>
            </svg>
          </button>
        </div>

        <FontAwesomeIcon
          onClick={() => setIsShowSarch(!isShowSarch)}
          className="searchButton"
          icon={faMagnifyingGlass}
        />
      </div>
      {isShowSarch ? <SearchForm Search={Search} /> : ""}
    </>
  );
};

export default NavBar;
