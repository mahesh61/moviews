import React from "react";
import "./card.css";
import movie1 from "../../images/Movie1.jpg";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Template from "./Template";
import { Link } from "react-router-dom";

const Card = ({ category, Items, isFullView, id }) => {
  const handleClick = () => {};
  const TotalView = () => {
    return (
      <>
        {Items.map((data) => (
          <Template Data={data} id={data.id} />
        ))}
      </>
    );
  };

  const TopItems = () => {
    return (
      <>
        {Items.slice(0, 6).map((data) => (
          <Template Data={data} id={data.id} />
        ))}
      </>
    );
  };

  return (
    <div className="library">
      <div className="library_info">
        <Link className="tittle" to={`/fullview/${id}`}>
          <h3>|</h3>
          <h4 className="link">{category}</h4>
          <FontAwesomeIcon
            className="next"
            icon={faChevronRight}
            onClick={handleClick}
          />
        </Link>
        <span>description about tittle here</span>
      </div>
      <div className="library_cards">
        {isFullView ? <TotalView /> : <TopItems />}
      </div>
    </div>
  );
};

export default Card;
