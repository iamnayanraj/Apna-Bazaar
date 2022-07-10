import React from "react";

const MenuList = (props) => {
  return (
    <>
      <ul>
        {props.menuList.map((list) => {
          return (
            <a href="#" key={list}>
              <li>
                <h4>{list}</h4>
              </li>
            </a>
          );
        })}
      </ul>
    </>
  );
};

export default MenuList;
