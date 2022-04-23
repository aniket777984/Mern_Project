export const cartReducer = (state = { cartPlaces: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      
      const isItemExist = state.cartPlaces.find(
        (i) => i.place === item.place
      );
      if(isItemExist){
        return{
          ...state
        }
      }else{
        return {
          ...state,
          cartPlaces: [...state.cartPlaces, item],
        };
      }

        

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartPlaces: state.cartPlaces.filter((i) => i.place !== action.payload),
      };
    default:
      return state;
  }
};
