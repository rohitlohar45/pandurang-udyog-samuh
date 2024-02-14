import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";
const NavbarTwo = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 300) {
        setActive(false);
      } else if (window.pageYOffset > 300) {
        setActive(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);
  const searchPopUp = useSelector((state) => state.clickAction.searchPopUp);
  const actionSearch = () => {
    store.dispatch(SetSearchPopUp(!searchPopUp));
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* navbar start */}
      <header className='navbar-area'>
        <nav
          className={
            active
              ? "navbar navbar-area-2 navbar-area navbar-expand-lg sticky-active"
              : "navbar navbar-area-2 navbar-area navbar-expand-lg"
          }
        >
          <div className='container nav-container'>
            <div className='responsive-mobile-menu'>
              <button
                onClick={() => setOpen(!open)}
                className={
                  open
                    ? "menu toggle-btn d-block d-lg-none open"
                    : "menu toggle-btn d-block d-lg-none "
                }
                data-target='#transpro_main_menu'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='icon-left' />
                <span className='icon-right' />
              </button>
            </div>
            <div className='logo'>
              <Link className='logo-1' to='/'>
                <img src='assets/img/home-2/logo.png' alt='Transpro' />
              </Link>
              <Link className='logo-2' to='/'>
                <img src='assets/img/logo-2.png' alt='logo' />
              </Link>
            </div>
            <div className='nav-right-part nav-right-part-mobile'>
              <span
                className='search-bar-btn ms-4 cursor-pointer'
                onClick={actionSearch}
              >
                <svg
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.9062 14.6562C15.9688 14.7188 16 14.8125 16 14.9062C16 15.0312 15.9688 15.125 15.9062 15.1875L15.1875 15.875C15.0938 15.9688 15 16 14.9062 16C14.7812 16 14.7188 15.9688 14.6562 15.875L10.8438 12.0938C10.7812 12.0312 10.75 11.9375 10.75 11.8438V11.4062C10.1562 11.9062 9.5 12.3125 8.78125 12.5938C8.03125 12.875 7.28125 13 6.5 13C5.3125 13 4.21875 12.7188 3.21875 12.125C2.21875 11.5625 1.4375 10.7812 0.875 9.78125C0.28125 8.78125 0 7.6875 0 6.5C0 5.3125 0.28125 4.25 0.875 3.25C1.4375 2.25 2.21875 1.46875 3.21875 0.875C4.21875 0.3125 5.3125 0 6.5 0C7.6875 0 8.75 0.3125 9.75 0.875C10.75 1.46875 11.5312 2.25 12.125 3.25C12.6875 4.25 13 5.3125 13 6.5C13 7.3125 12.8438 8.0625 12.5625 8.78125C12.2812 9.53125 11.9062 10.1875 11.4062 10.75H11.8438C11.9375 10.75 12.0312 10.7812 12.0938 10.8438L15.9062 14.6562ZM6.5 11.5C7.375 11.5 8.21875 11.2812 9 10.8438C9.75 10.4062 10.375 9.78125 10.8125 9C11.25 8.25 11.5 7.40625 11.5 6.5C11.5 5.625 11.25 4.78125 10.8125 4C10.375 3.25 9.75 2.625 9 2.1875C8.21875 1.75 7.375 1.5 6.5 1.5C5.59375 1.5 4.75 1.75 4 2.1875C3.21875 2.625 2.59375 3.25 2.15625 4C1.71875 4.78125 1.5 5.625 1.5 6.5C1.5 7.40625 1.71875 8.25 2.15625 9C2.59375 9.78125 3.21875 10.4062 4 10.8438C4.75 11.2812 5.59375 11.5 6.5 11.5Z'
                    fill='#080C24'
                  />
                </svg>
              </span>
              <Link className='btn btn-base' to='/contact'>
                <span></span> Get A Quote
              </Link>
            </div>
            <div
              className={
                open
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id='transpro_main_menu'
            >
              <ul className='navbar-nav menu-open text-end'>
                <li className='menu-item-has-children current-menu-item'>
                  <Link to='#'>Home</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/'>Home 01</Link>
                    </li>
                    <li>
                      <Link to='/home-2'>Home 02</Link>
                    </li>
                    <li>
                      <Link to='/home-3'>Home 03</Link>
                    </li>
                    <li>
                      <Link to='/home-4'>Home 04</Link>
                    </li>
                    <li>
                      <Link to='/home-5'>Home 05</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/about'>About Us</Link>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Services</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/service'>Service</Link>
                    </li>
                    <li>
                      <Link to='/service-details'>Service Details Page</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Pages</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                      <Link to='/service'>Service Page</Link>
                    </li>
                    <li>
                      <Link to='/service-details'>Service Details Page</Link>
                    </li>
                    <li>
                      <Link to='/blog'>Blog Page</Link>
                    </li>
                    <li>
                      <Link to='/blog-details'>Blog Details</Link>
                    </li>
                    <li>
                      <Link to='/pricing'>Pricing</Link>
                    </li>
                    <li>
                      <Link to='/faq'>FAQ</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Contact</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Blog</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                      <Link to='/blog-details'>Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className='nav-right-part nav-right-part-desktop'>
              <span
                className='search-bar-btn ms-4 cursor-pointer'
                onClick={actionSearch}
              >
                <svg
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.9062 14.6562C15.9688 14.7188 16 14.8125 16 14.9062C16 15.0312 15.9688 15.125 15.9062 15.1875L15.1875 15.875C15.0938 15.9688 15 16 14.9062 16C14.7812 16 14.7188 15.9688 14.6562 15.875L10.8438 12.0938C10.7812 12.0312 10.75 11.9375 10.75 11.8438V11.4062C10.1562 11.9062 9.5 12.3125 8.78125 12.5938C8.03125 12.875 7.28125 13 6.5 13C5.3125 13 4.21875 12.7188 3.21875 12.125C2.21875 11.5625 1.4375 10.7812 0.875 9.78125C0.28125 8.78125 0 7.6875 0 6.5C0 5.3125 0.28125 4.25 0.875 3.25C1.4375 2.25 2.21875 1.46875 3.21875 0.875C4.21875 0.3125 5.3125 0 6.5 0C7.6875 0 8.75 0.3125 9.75 0.875C10.75 1.46875 11.5312 2.25 12.125 3.25C12.6875 4.25 13 5.3125 13 6.5C13 7.3125 12.8438 8.0625 12.5625 8.78125C12.2812 9.53125 11.9062 10.1875 11.4062 10.75H11.8438C11.9375 10.75 12.0312 10.7812 12.0938 10.8438L15.9062 14.6562ZM6.5 11.5C7.375 11.5 8.21875 11.2812 9 10.8438C9.75 10.4062 10.375 9.78125 10.8125 9C11.25 8.25 11.5 7.40625 11.5 6.5C11.5 5.625 11.25 4.78125 10.8125 4C10.375 3.25 9.75 2.625 9 2.1875C8.21875 1.75 7.375 1.5 6.5 1.5C5.59375 1.5 4.75 1.75 4 2.1875C3.21875 2.625 2.59375 3.25 2.15625 4C1.71875 4.78125 1.5 5.625 1.5 6.5C1.5 7.40625 1.71875 8.25 2.15625 9C2.59375 9.78125 3.21875 10.4062 4 10.8438C4.75 11.2812 5.59375 11.5 6.5 11.5Z'
                    fill='#080C24'
                  />
                </svg>
              </span>
              <Link className='btn btn-base' to='/contact'>
                <span></span> Get A Quote
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* navbar end */}
    </>
  );
};

export default NavbarTwo;
