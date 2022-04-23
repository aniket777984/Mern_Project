import React, { Fragment,useState } from "react";
import "./PlaceDetails.css";
import Carousel from "react-material-ui-carousel";
import ReviewCard from "./ReviewCard";
import {Dialog,DialogActions,DialogContent,DialogTitle,Button} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useParams } from "react-router-dom";
import {travelStories} from "../../data";

const TravelStories = () => {
  const { id } = useParams();

    
  const specificPlace = travelStories.filter(p => p._id === id);
  const travel = specificPlace[0];

  const options = {
    size: "large",
    value: travel.ratings,
    readOnly: true,
    precision: 0.5,
  };

     
  const [open ,setOpen] =  useState(false);

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  
  const reviewSubmitHandler = () => {
    setOpen(false);
  };

  


  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {travel.images &&
              travel.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={item.url}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousel>
        </div>

        <div>
          <div className="detailsBlock-1">
            <h2>{travel.name}</h2>
            <p>Product # {travel._id}</p>
          </div>
          <div className="detailsBlock-2">
            <Rating {...options} />
            <span className="detailsBlock-2-span">
              ({travel.numOfReviews} Reviews)
            </span>
          </div>
          <div className="detailsBlock-4">
            Description : <p>This is Good</p>
          </div>
          <button onClick={submitReviewToggle} className="submitReview">Submit Review</button>
        </div>
      </div>

      <h3 className="reviewsHeading">REVIEWS</h3>
      <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {travel.reviews && travel.reviews[0] ? (
            <div className="reviews">
              {travel.reviews &&
                travel.reviews.map((review,index) => (
                  <ReviewCard key={index} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
    </Fragment>
  );
};

export default TravelStories;
