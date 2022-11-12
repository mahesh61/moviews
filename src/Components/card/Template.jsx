import React from "react";
import movie1 from "../../images/Movie1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Template = ({ Data, id }) => {
  const Trailer = () => {
    const url = `https://imdb-api.com/en/API/YouTubeTrailer/k_ph04pjso/${id}`;
    console.log(id);
    fetch(url)
      .then((x) => x.json())
      .then((res) => {
        console.log(res);
        window.open(res.videoUrl, "_blank", "noopener,noreferrer");
      });
  };

  return (
    <div className="card">
      <img src={Data.image} alt="" className="card_img" />
      <div className="Card_info">
        <div className="card_rating">
          <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
          <span>{Data.imDbRating}</span>
        </div>
        <h5 className="Card_tittle">{Data.title}</h5>
        <button className="card_button">
          <span>+</span>
          <span>WatchList</span>
        </button>
        <div className="card_addInfo">
          <a className="trailer" onClick={Trailer}>
            <FontAwesomeIcon className="play" icon={faPlay} />
            <span>Trailer</span>
          </a>
          <div className="info">
            <div className="info-hover">
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
