import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";

const SearchPopup = () => {
  const searchPopUp = useSelector((state) => state.clickAction.searchPopUp);

  const actionSearch = () => {
    store.dispatch(SetSearchPopUp(!searchPopUp));
  };
  return (
    <>
      {/* search popup start*/}
      <div
        className={searchPopUp ? "body-overlay active" : "body-overlay"}
        id='body-overlay'
        onClick={actionSearch}
      />
      <div
        className={searchPopUp ? "td-search-popup active" : "td-search-popup"}
        id='td-search-popup'
      >
        <form action='/' className='search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search.....'
            />
          </div>
          <button type='submit' className='submit-btn'>
            <FaSearch />
          </button>
        </form>
      </div>
      {/* search popup end*/}
    </>
  );
};

export default SearchPopup;
