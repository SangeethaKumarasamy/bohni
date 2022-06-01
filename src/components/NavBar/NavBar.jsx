import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { SearchPosts } from "../../reducer/postSlice";
import "./Navbar.css";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  if (search.length >= 2) {
    dispatch(SearchPosts(search));
  }
  console.log(search);
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='navbar__logo'>
          <h2>Bohni Tech</h2>
        </div>
        <div className='navbar__search'>
          <div className='navbar__searchLogo'>
            <FaSistrix className='navbar__searchIcon' />
          </div>
          <div className='navbar__searchBar'>
            <input type='text' onChange={handleChange} value={search} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;