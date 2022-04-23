import React from "react";
import { ReactNavbar } from "overlay-navbar";
import Search from "@material-ui/icons/Search";

const Header = () => {

  const logo = "https://i.pinimg.com/originals/2e/cf/73/2ecf7364cd78b7222311518159a72179.jpg"

  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(219, 48%, 8%)"
      burgerColor="hsl(250, 100%, 75%)"
      burgerColorHover="hsl(250, 100%, 75%)"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="Places"
      link3Text="About"
      link4Text="Account"
      link1Url="/"
      link2Url="/places"
      link3Url="/about"
      link4Url="/account"
      link1ColorHover="white"
      link1Color="HSL(250, 100%, 75%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={Search}
      profileIconColor="HSL(250, 100%, 75%)"
      profileIconColorHover="white"
      profileIconUrl="/search"
    />
  );
};

export default Header;
