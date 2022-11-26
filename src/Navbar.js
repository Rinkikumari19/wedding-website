import React from "react";
import SearchIcon from "@material-ui/icons/Search";

export default function Navbar() {
  return (
    <nav className="top-nav">
      <div className="d-flex">
        <div className="d-flex">
          <a
            className="menu-bar big-menu"
            href="https://www.wedmegood.com/delhi-ncr-wedding"
          >
            <img src="https://images.wedmegood.com/images/WMG-logo.svg" />
            {/* WedMeGood */}
          </a>
          <a
            className="menu-bar"
            href="https://www.wedmegood.com/vendors/delhi-ncr/wedding-venues/"
          >
            Venues
          </a>
          <a
            className="menu-bar"
            href="https://www.wedmegood.com/vendors/delhi-ncr/"
          >
            Venders
          </a>
          <a className="menu-bar" href="https://www.wedmegood.com/photos">
            Photos
          </a>
          <a className="menu-bar" href="https://www.wedmegood.com/real_wedding">
            Real Weddings
          </a>
          <a className="menu-bar" href="https://www.wedmegood.com/blog">
            Blogs
          </a>
          <a
            className="menu-bar"
            href="https://www.wedmegood.com/shop/bridal-wear-home"
          >
            Shop
          </a>
          <a
            className="menu-bar"
            href="https://www.wedmegood.com/wedding-invitations"
          >
            E-invites
          </a>
        </div>
        <div className="d-flex">
          <a href="https://www.wedmegood.com/delhi-ncr-wedding">
            <SearchIcon className="search-icon" />
          </a>

          <a href="https://www.wedmegood.com/login?referrer=/delhi-ncr-wedding&whatsappClicked=0">
            <button className="login-btn">Log In</button>
          </a>
        </div>
      </div>
    </nav>
  );
}
