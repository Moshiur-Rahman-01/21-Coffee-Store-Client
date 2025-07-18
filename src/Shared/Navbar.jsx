import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css';
import UseAuth from '../CustomHooks/UseAuth';

const Navbar = () => {
  const { user, signOutUser } = UseAuth();
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/addcoffee'>Add Coffee</NavLink>
        <NavLink to='/users'>Users</NavLink>
    </>

    const handleSignOut = () => {
      signOutUser()
        .then(() => {
          console.log("sign out done");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return (
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu flex gap-6 items-center menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex gap-3">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <button onClick={handleSignOut} className="btn">
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex gap-3 ">
                <NavLink to="/register" className="btn">
                  Register
                </NavLink>
                <NavLink to="/signin" className="btn">
                  Sign In
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;