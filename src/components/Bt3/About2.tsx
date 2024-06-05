import React from 'react';
import { Link } from 'react-router-dom';

export default function About2() {
  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <Link to="/" className="logo m-0">
              Tour <span className="text-primary">.</span>
            </Link>
            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="has-children">
                <Link to="#">Dropdown</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/elements">Elements</Link>
                  </li>
                  <li>
                    <Link to="#">Menu One</Link>
                  </li>
                  <li className="has-children">
                    <Link to="#">Menu Two</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="#">Sub Menu One</Link>
                      </li>
                      <li>
                        <Link to="#">Sub Menu Two</Link>
                      </li>
                      <li>
                        <Link to="#">Sub Menu Three</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Menu Three</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li className="active">
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span />
            </a>
          </div>
        </div>
      </nav>
      {/* Additional content here */}
    </div>
  );
}
