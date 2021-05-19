import React from "react";

const Footer = () => (
  <footer className="site-footer bg-secondary">
    <div className="container-fluid">
      <div className="row">
        <hr />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-3">
              <h6>Company</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">How it works</a>
                </li>
                <li>
                  <a href="/">Help center</a>
                </li>
                <li>
                  <a href="/">Privacy policy</a>
                </li>
                <li>
                  <a href="/">Contact us</a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-md-3">
              <h6>Trendeing jobs</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">Front-end developer</a>
                </li>
                <li>
                  <a href="/">Android developer</a>
                </li>
                <li>
                  <a href="/">iOS developer</a>
                </li>
                <li>
                  <a href="/">Full stack developer</a>
                </li>
              </ul>
            </div>
          </div>

          <hr />
        </div>
      </div>
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text text-center">
          Copyrights &copy; 2021 All Rights Reserved by{"  "}
          <a href="/">Juan Pablo Acosta Betancur</a>.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
