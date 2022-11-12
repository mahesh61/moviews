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

const Home = () => {
  const Search = (expression) => {
    const url = `https://imdb-api.com/API/SearchMovie/k_ph04pjso/${expression}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setSearchList(data.results);
        setShowSearch(true);
      });
  };
  const [showSerach, setShowSearch] = useState(false);
  const [showFullView, setShowFullView] = useState(false);
  const [serachList, setSearchList] = useState([]);
  const Content = () => {
    return (
      <>
        <Card
          category={"In Theaters"}
          Items={Items}
          isFullView={false}
          id={1}
        />
        <Card
          category={"Most Popular Movies"}
          Items={MosoPopular}
          isFullView={false}
          id={2}
        />
        <Card
          category={"Most Popular TVs"}
          Items={MostPoPularTVS}
          isFullView={false}
          id={3}
        />
        <Card
          category={"Top Movies"}
          Items={TopMovies}
          isFullView={false}
          id={4}
        />
        <Card category={"Top TVs"} Items={TopTvs} isFullView={false} id={5} />
      </>
    );
  };

  const SetFull = () => {
    setShowFullView(true);
    console.log("clickded....");
  };

  return (
    <div className="App">
      <div className="content">
        {showSerach ? (
          <Card category={"Search Results"} Items={serachList} />
        ) : (
          <Content />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
