import React from "react";
import "./Home.css";
import { Fragment } from "react";
import { featuredPlaces, exclusive , travelStories } from "../../data";
import PlaceCard from "./PlaceCard";
import { Link } from "react-router-dom";
import TravelCard from "./TravelCard";

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Make Travelling Easy with TravelPad</p>
        <h1>FIND Your Next Story Below</h1>

        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Places</h2>
      <div className="container" id="container">
        {featuredPlaces &&
          featuredPlaces.map((place) => {
            return (
              <Link className="productCard" to={`/featuredplace/${place._id}`}>
                <PlaceCard place={place} />
              </Link>
            );
          })}
      </div>

      <h2 className="homeHeading">Exclusive Places</h2>
      <div className="container" id="container">
        {exclusive &&
          exclusive.map((place) => {
            return (
              <Link className="productCard" to={`/exclusiveplace/${place._id}`}>
                <PlaceCard place={place} />
              </Link>
            );
          })}
      </div>


      <div class="cta">
            <h3>Sharing <br />Is Earning Now</h3>
            <p>Great oppurtunity to make money by <br />sharing your extra space</p>
            <a href="https://www.youtube.com" class="cta-btn">Know More</a>
      </div>

      <h2 className="homeHeading">Travel Stories</h2>
      <div className="stories">
        {travelStories &&
          travelStories.map((place) => {
            return (
              <Link className="travelCard" to={`/travelstories/${place._id}`}>
                <TravelCard place={place} />
              </Link>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Home;
