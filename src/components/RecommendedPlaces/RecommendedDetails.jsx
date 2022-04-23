import React from "react";
import "./RecommendedDetails.css";
import Carousel from "react-material-ui-carousel";
import { recommended } from "../../data";
import { useParams } from "react-router-dom";
import {Rating} from "@material-ui/lab";

const RecommendedDetails = () => {
  const { id } = useParams();


  const specificPlace = recommended.filter(p => p._id === id);
  const recommendedStay = specificPlace[0];

  const options = {
    size : "large",
    value : recommendedStay.rating,
    readOnly : true,
    precision : 0.5,
  };



  return (
    <div className="house-details">
      <div className="house-title">
        <h1>{recommendedStay.name}</h1>
        <div className="row">
          <div>
            <span>{recommendedStay.numOfReviews} Reviews</span>
          </div>
          <div>
            <p>Location : {recommendedStay.location}</p>
          </div>
        </div>
      </div>
      <div className="gallery">
        <Carousel>
          {recommendedStay.images &&
            recommendedStay.images.map((item, i) => (
              <img
                className="CarouselImage"
                key={item.url}
                src={item.url}
                alt={`${i} Slide`}
              />
            ))}
        </Carousel>
      </div>
      <Rating {...options} />
      <div className="small-details">
        <h2>Entire rental unit hosted by Brandon</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
          illo.
        </p>
        <h4>$ {recommendedStay.price} / day</h4>
      </div>
      <hr className="line" />
      <form class="check-form">
        <div>
          <label>Check In</label>
          <input type="text" placeholder="Add Date" />
        </div>
        <div>
          <label>Check Out</label>
          <input type="text" placeholder="Add Date" />
        </div>
        <div class="guest-field">
          <label>Guest</label>
          <input type="text" placeholder="2 guest" />
        </div>
        <button type="submit">Check Availability</button>
      </form>

      <ul className="details-list">
        <li>
          Entire Home
          <span>You will have the entire flat </span>
        </li>
        <li>
          Enhanced Clean
          <span>You will have the entire flat </span>
        </li>
        <li>
          Great Location
          <span>You will have the entire flat </span>
        </li>
        <li>
          Great Check-In Experience
          <span>You will have the entire flat </span>
        </li>
      </ul>

      <hr className="line" />
    </div>
  );
};

export default RecommendedDetails;
