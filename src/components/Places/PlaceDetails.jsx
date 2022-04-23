import React, { Fragment, useEffect, useState } from "react";
import "./PlaceDetails.css";
import Carousel from "react-material-ui-carousel";
import ReviewCard from "./ReviewCard";
import {Dialog,DialogActions,DialogContent,DialogTitle,Button} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useParams } from "react-router-dom";
import {featuredPlaces} from "../../data";
import {useDispatch} from "react-redux"
import {addItemsToCart} from "../../actions/cart"

const PlaceDetails = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();


  const [featured,setFeatured] =  useState({});
  useEffect(()=>{
    const specificPlace = featuredPlaces.filter(p => p._id === id);
    setFeatured(specificPlace[0]);
  },[id,setFeatured])


  const options = {
    size: "large",
    value: featured.ratings,
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
    dispatch(addItemsToCart(featured));
    alert("Item Added to Cart");
  }



  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {featured.images &&
              featured.images.map((item, i) => (
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
            <h2>{featured.name}</h2>
            <p>Product # {featured._id}</p>
          </div>
          <div className="detailsBlock-2">
            <Rating {...options} />
            <span className="detailsBlock-2-span">
              ({featured.numOfReviews} Reviews)
            </span>
          </div>
          <div className="detailsBlock-3">
            <h1>{`₹ ${featured.price}`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
               
              </div>
              <button  onClick={addToCartHandler} >Add to Cart</button>
            </div>
            <p>
              Status:
              <b>OutOfStock</b>
            </p>
          </div>
          <div className="detailsBlock-4">
            Description : <p>This is Good</p>
          </div>
          <button onClick={submitReviewToggle}  className="submitReview"  >Submit Review</button>
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

          {featured.reviews && featured.reviews[0] ? (
            <div className="reviews">
              {featured.reviews &&
                featured.reviews.map((review,index) => (
                  <ReviewCard key={index} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
    </Fragment>
  );
};

export default PlaceDetails;
