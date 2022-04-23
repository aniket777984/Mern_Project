import React, { Fragment } from "react";
import { Rating } from "@material-ui/lab";

const PlaceCard = ({ place }) => {
  const options = {
    value: place.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    // <Link className='productCard' to={`/featuredplace/${place._id}`}>
    <Fragment >
      <img src={place.images[0].url} alt={place.name} />
      <p className="tag" >{place.name}</p>
      <div>
        <Rating {...options} /> <span>({place.numOfReviews} Reviews) </span>
      </div>
      <span>Price :- Rs {place.price}</span>
    </Fragment>
    // </Link>
  );
};

export default PlaceCard;
