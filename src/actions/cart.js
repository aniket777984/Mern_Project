// Add to Cart
export const addItemsToCart = (data) => async (dispatch, getState) => {  
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        place: data._id,
        name: data.name,
        price: data.price,
        image: data.images[0].url,
      },
    });
  
    localStorage.setItem("cartPlaces", JSON.stringify(getState().cart.cartPlaces));
};
  
// REMOVE FROM CART
export const removeItemsFromCart = (data) => async (dispatch, getState) => {
  dispatch({
    type: "REMOVE_CART_ITEM",
    payload: data.place,
  });

  localStorage.setItem("cartPlaces", JSON.stringify(getState().cart.cartPlaces));
};

