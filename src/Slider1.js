import React, { useState } from "react";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { DialogContent, DialogContentText } from "@material-ui/core";
export default function Slider1() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="back-image">
        <h1 className="h3-tag">Plan a Delhi NCR Wedding</h1>
        <div className="select-div" onClick={() => setIsOpen(!isOpen)}>
          <AccountBalanceIcon className="bank-icon" />
          <p>Find Vendors in Delhi NCR</p>
          {isOpen ? (
            <KeyboardArrowUpIcon style={{ marginTop: "13px" }} />
          ) : (
            <KeyboardArrowDownIcon style={{ marginTop: "13px" }} />
          )}
        </div>
        {isOpen ? (
          <DialogContent className="card-menu">
            <DialogContentText className="footer-head menu-item">
              <div>
                <h4>Venues</h4>
                <p>Banquet Halls</p>
                <p>Lawns / Farmhouses</p>
                <p>Resorts</p>
                <p>Small Function Halls</p>
                <p>Destination Wedding</p>
                <p>Kalyan Mandapam</p>
                <p>4 Star & Above Hotels</p>
                <p>View All Venues</p>

                <h4>Photographers</h4>
                <p>Banquet Halls</p>
                <p>Lawns / Farmhouses</p>
                <p>Resorts</p>

                <h4>Make Up</h4>
                <p>Banquet Halls</p>
                <p>Lawns / Farmhouses</p>
              </div>
              <div>
                <h4>Bridal Wear</h4>
                <p>Bridal Lehengas</p>
                <p>Kanjeevaram / Silk Sarees</p>
                <p>Cocktail Gowns</p>
                <p>Trousseau Sarees</p>
                <p>Bridal Lehenga on Rent</p>
                <p>View All Bridal Wear</p>

                <h4>Groom Wear</h4>
                <p>Banquet Halls</p>
                <p>Lawns / Farmhouses</p>
                <p>Resorts</p>
                <p>Resorts</p>

                <h4>Mehandi</h4>
                <p>Banquet Halls</p>
              </div>
              <div>
                <h4>Planning and Decor</h4>
                <p>Wedding Planners</p>
                <p>Decorators</p>

                <h4>Food</h4>
                <p>Invitations</p>
                <p>Favors</p>
                <p>Trousseau Packers</p>
                <p>Invitation Gifts</p>
                <p>Wedding gifts for the bride / groom</p>
                <p>Mehndi Favors</p>
              </div>
              <div>
                <h4>Invites & Gifts</h4>
                <p>Invitations</p>
                <p>Favors</p>
                <p>Trousseau Packers</p>
                <p>Invitation Gifts</p>
                <p>Wedding gifts for the bride / groom</p>
                <p>Mehndi Favors</p>
                <p>View All Invites & Gifts</p>

                <h4>Music & Dance</h4>
                <p>Invitations</p>
                <p>Favors</p>
                <p>Trousseau Packers</p>
              </div>
            </DialogContentText>
          </DialogContent>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
