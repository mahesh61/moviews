import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Card from "./Components/card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Components/footer/Footer";
import { Items } from "./Data/Data";
import MosoPopular from "./Data/MostPopular";
import MostPoPularTVS from "./Data/MostPoPularTVS";
import TopMovies from "./Data/TopMovies";
import TopTvs from "./Data/TopTvs";
import { useState } from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import FullView from "./Components/FullView";
import SearchResult from "./Components/SearchResult";
import PopUPInfo from "./Components/popup/PopUPInfo";

function App() {
    return ( <
        >
        <
        NavBar / > { " " } <
        div className = "heading" >
        <
        h4 >
        Where You Can Check IMDB Reviews of Movies, Tv Shows & Series and Watch Trailer { " " } <
        /h4>{" "} <
        div className = "desc" >
        <
        FontAwesomeIcon className = "FontAwesomeIcon"
        icon = { faStar }
        />{" "} <
        span >
        Comments should be relevant to the contents of this article { " " } <
        /span>{" "} <
        /div>{" "} <
        FontAwesomeIcon className = "feather"
        icon = { faFeatherPointed }
        />{" "} <
        /div>{" "} <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />{" "} <
        Route path = "/search"
        element = { < SearchResult / > }
        />{" "} <
        Route path = "/pop"
        element = { < PopUPInfo / > }
        />{" "} <
        Route path = "/fullview/:id"
        element = { < FullView / > }
        />{" "} <
        /Routes>{" "} <
        />
    );
}

export default App;