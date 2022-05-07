import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  .footer {
    overflow: hidden;
    position: sticky;
    top: 100%;
    background-color: #000;
    padding: 20px 10px;
    margin-top: 30px;
  }

  h1 {
    font-weight: bold;
    color: #fff;
    font-size: 20px;
  }
  p {
    color: var(--primary-color);
    font-size: 12px;
  }
  a {
    color: #fff !important;
    text-decoration: none;
    padding: 0px 10px;
    font-size: 17px;
  }
  a:hover {
    color: var(--primary-color);
  }
  i {
    padding: 0 10px;
  }
  i:hover {
    color: var(--primary-color);
  }
`;
const Footer = () => {
  return (
    <StyledDiv>
      <div className="container-fluid footer mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h1>TechGear</h1>
            <p>BEST BUY, BEST QUALITY</p>
          </div>
          <div className="col-lg-4">
            <a>Home</a>
            <a>Menu</a>
            <a>About</a>
            <a>Contact</a>
          </div>
          <div className="col-lg-2">
            <a href="#" target="_blank">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" target="_blank">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="#" target="_blank">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" target="_blank">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};
export default Footer;
