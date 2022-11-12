import React from "react";
import { useLocation } from "react-router-dom";
import Card from "./card/Card";
const SearchResult = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <Card
        category={"Search Result"}
        Items={location.state}
        isFullView={true}
      />
    </>
  );
};

export default SearchResult;
