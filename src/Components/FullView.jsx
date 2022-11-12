import React from "react";
import { Items } from "../Data/Data";
import Card from "./card/Card";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import MosoPopular from "../Data/MostPopular";
import MostPoPularTVS from "../Data/MostPoPularTVS";
import TopMovies from "../Data/TopMovies";
import TopTvs from "../Data/TopTvs";

const FullView = () => {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  const Project = ({ x }) => {
    switch (x) {
      case "1":
        return (
          <Card category={"In Theaters"} Items={Items} isFullView={true} />
        );
      case "2":
        return (
          <Card
            category={"Most Popular Movies"}
            Items={MosoPopular}
            isFullView={true}
          />
        );
      case "3":
        return (
          <Card
            category={"Most Popular TVs"}
            Items={MostPoPularTVS}
            isFullView={true}
          />
        );
      case "4":
        return (
          <Card category={"Top Movies"} Items={TopMovies} isFullView={true} />
        );
      case "5":
        return <Card category={"Top TVs"} Items={TopTvs} isFullView={true} />;
      default:
        return <h1>No project match</h1>;
    }
  };
  return (
    <>
      <Project x={id} />
    </>
  );
};

export default FullView;
