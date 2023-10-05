import React, { Fragment } from "react";
import Link from "next/link";
import classes from "../layout/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <Fragment>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          {" "}
          <Link href="/Home">
            <h1>Rambait</h1>
          </Link>
        </div>

        <section className={classes.navlinks}>
          {" "}
          <Link href="/Home">Home</Link>
          <Link href="/Schedule Pick-Up">Schedule Pick-Up</Link>
          <Link href="/About Us">About Us</Link>
          <Link href="/Feedback">Feedback</Link>
          <Link href="/Latest News">Latest News</Link>
          <Link href="/Gallery">Gallery</Link>
          <Link href="/Contact Us">Contact Us</Link>
        </section>

        <div className={classes.socials}>
          {" "}
          <Link href="/">
            {" "}
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="lg" />
            LinkedIn
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            facebook
          </Link>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
