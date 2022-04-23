import React, { Fragment, useState } from "react";
import "./PlaceDetails.css";
import Carousel from "react-material-ui-carousel";
import ReviewCard from "./ReviewCard";
import {Dialog,DialogActions,DialogContent,DialogTitle,Button} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useParams } from "react-router-dom";
import {exclusive} from "../../data";
import {useDispatch} from "react-redux"
import {addItemsToCart} from "../../actions/cart";

const ExclusivePlaceDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  
  const specificPlace = exclusive.filter(p => p._id === id);
  const exclusivePlace = specificPlace[0];

  const options = {
    size: "large",
    value: exclusivePlace.ratings,
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

  const addToCartHandler = () =>{
    dispatch(addItemsToCart(exclusivePlace));
    alert("Item Added to Cart");
  }



  return (

   

    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {exclusivePlace.images &&
              exclusivePlace.images.map((item, i) => (
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
            <h2>{exclusivePlace.name}</h2>
            <p>Product # {exclusivePlace._id}</p>
          </div>
          <div className="detailsBlock-2">
            <Rating {...options} />
            <span className="detailsBlock-2-span">
              ({exclusivePlace.numOfReviews} Reviews)
            </span>
          </div>
          <div className="detailsBlock-3">
            <h1>{`₹ ${exclusivePlace.price}`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
              </div>
              <button  onClick={addToCartHandler}  >Add to Cart</button>
            </div>
            <p>
              Status:
              <b>OutOfStock</b>
            </p>
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

          {exclusivePlace.reviews && exclusivePlace.reviews[0] ? (
            <div className="reviews">
              {exclusivePlace.reviews &&
                exclusivePlace.reviews.map((review,index) => (
                  <ReviewCard key={index} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
    </Fragment>
  );
};

export default ExclusivePlaceDetails;
