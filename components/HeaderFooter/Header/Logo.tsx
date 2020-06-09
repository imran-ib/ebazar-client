import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
import styles from "styled-components";
import media from "styled-media-query";

const LogoStyles = styles.div`
.logo-sm-custom{
  ${media.lessThan("medium")`
  margin-top: -40px;
  `}
}
`;

function Logo() {
  return (
    <LogoStyles>
      <Col xl={2} lg={2}>
        <div className="logo pt-40 logo-sm-custom ">
          <Link href="/">
            <a>
              <img src="/static/img/logo/ibazar-logo.png" alt="Logo Image" />
            </a>
          </Link>
        </div>
      </Col>
    </LogoStyles>
  );
}

export default Logo;
