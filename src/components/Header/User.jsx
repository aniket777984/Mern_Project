import React, { Fragment,useState} from 'react';
import "./Header.css";
import {SpeedDial,SpeedDialAction} from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import {useNavigate} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {useSelector} from "react-redux"

const User = () => {

  const [open, setOpen] = useState(false);
  const history = useNavigate();

  const {cartPlaces} = useSelector(state => state.cart);

  const options = [
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <DashboardIcon />, name: "Places", func: places },
    { icon: <SearchIcon />, name: "Search", func: search },
    { icon: (
      <ShoppingCartIcon
        style={{ color: cartPlaces.length > 0 ? "tomato" : "unset" }}
      />
    ),  name: `Cart(${cartPlaces.length})`, func:cart },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser }
  ];

  function places() {
    history("/places");
  }

  function account() {
    history("/profile");
  }
  function logoutUser() { 
  }
  function search(){
    history("/search");
  }
  function cart() {
    history("/cart");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }}  />
        <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src="/Profile.png"
            alt="Profile"
          />
        }
      >
         {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth<700?true:false}
          />
        ))}
       
        </SpeedDial>
    </Fragment>
  )
}

export default User