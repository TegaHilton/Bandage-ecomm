// import React from 'react'
import Bandagelogo from "../icons/bandagelogo";
import Loveicon from "../icons/loveicon";
import Searchicon from "../icons/searchIcon";
import Carticon from "../icons/cartIcon";
// import Usericon from "../icons/usericon";
function nav() {
  return (
    <header className="flex w-full bg-lightgrey px-20 py-8">
      <div className="w-1/5">
        <Bandagelogo />
      </div>
      <div className="w-4/5 flex justify-between">
        <ul className="flex w-2/3 justify-between ">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
        <div className="flex w-1/3 justify-between items-center ">
          <span>Login/Register</span>
          <Searchicon />
          <Carticon />
          <Loveicon />
        </div>
      </div>
    </header>
  );
}

export default nav;
