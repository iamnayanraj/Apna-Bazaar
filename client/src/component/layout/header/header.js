import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../header/header.css";
import MenuList from "./menuList";
const Header = () => {
  const [isMenuListOpen, setMenuListOpen] = useState(false);
  const menuList = ["Home", "Product", "About", "Profile"];
  const toggleMenuList = () => {
    !isMenuListOpen ? setMenuListOpen(true) : setMenuListOpen(false);
  };
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <a href="/">
            <h2>Apna Bazaar</h2>
          </a>
        </div>
        <div className="menu-list">
          <MenuList menuList={menuList} />
        </div>
        <div className="search-and-profile">
          <input type="text" />
          <a className="profile-avatar" href="#">
            <FaUserEdit />
          </a>
        </div>
        <div className="toggle-button">
          <a onClick={toggleMenuList}>
            <GiHamburgerMenu />
          </a>
        </div>
        {isMenuListOpen ? (
          <div className="menulist-dropdown-medium">
            <div className="search-and-profile-medium">
              <input type="text" />
              <a className="profile-avatar" href="#">
                <FaUserEdit />
              </a>
            </div>
            <div className="main-menulist">
              <MenuList menuList={menuList} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Header;
