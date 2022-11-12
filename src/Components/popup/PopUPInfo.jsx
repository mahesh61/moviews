import React from "react";
import "./popUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const PopUPInfo = () => {
  return (
    <div className="body">
      <div className="popUp">
        <div className="header">
          <img src="" alt="" />
          <div className="header_info">
            <div className="header_info_tittle">
              <span>Barbarian</span>
              <FontAwesomeIcon className="next" icon={faChevronRight} />
            </div>
            <div className="header_info_time">
              <span>2022</span>
              <span>1hr 45min</span>
              <span>21</span>
            </div>
            <div className="header_info_category">
              <span>Horror</span>
              <span>thriller</span>
            </div>
            <div className="header_info_rating">
              <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
              <span>8.1/10</span>
            </div>
          </div>
        </div>
        <div className="content">
          <p className="desc">
            A woman staying at an Airbnb discovers that the house she has rented
            is not what it seems
          </p>
          <div className="craft">
            <span className="craft_name">Director</span>
            <span className="craft_value">Zach Cregger</span>
          </div>
          <div className="craft">
            <span className="craft_name">Stars </span>
            <span className="craft_value">
              Georgina CampbellBill SkarsgårdJustin Long
            </span>
          </div>
          <div className="content__buttons">
            <a className="trailer">
              <FontAwesomeIcon className="play" icon={faPlay} />
              <span>Trailer</span>
            </a>
            <button className="card_button">
              <span>+</span>
              <span>WatchList</span>
            </button>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default PopUPInfo;
