import React from "react";
import Link from "next/link";

const Links: {
  id: number;
  to: string;
  text: string;
}[] = [
  {
    id: 1,
    to: "/",
    text: "Home",
  },
  {
    id: 2,
    to: "/Shop",
    text: "Shop",
  },
  {
    id: 3,
    to: "/shop",
    text: "Accessories",
  },
  {
    id: 4,
    to: "/contact",
    text: "Contact",
  },
  {
    id: 5,
    to: "/about",
    text: "About",
  },
  {
    id: 6,
    to: "/blog",
    text: "Blog",
  },
];

const SocialLinks: {
  id: number;
  target: string;
  href: string;
  rel: string;
  SocialMediaName: string;
}[] = [
  {
    id: 1,
    target: "_blank",
    href: "https://www.facebook.com",
    rel: "noopener noreferrer",
    SocialMediaName: "Facebook",
  },
  {
    id: 2,
    target: "_blank",
    href: "https://www.twitter.com",
    rel: "noopener noreferrer",
    SocialMediaName: "Twitter",
  },
  {
    id: 3,
    target: "_blank",
    href: "https://www.linkedin.com",
    rel: "noopener noreferrer",
    SocialMediaName: "Linkedin",
  },
  {
    id: 4,
    target: "_blank",
    href: "https://www.instagram.com",
    rel: "noopener noreferrer",
    SocialMediaName: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="footer-area bg-paleturquoise">
      <div className="container">
        <div className="footer-top text-center pt-45 pb-45">
          <nav>
            <ul>
              {Links.map((link) => (
                <li key={link.id}>
                  <Link href={`${link.to}`}>
                    <a>{link.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-bottom border-top-1 pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5 col-12">
              <div className="footer-social pb-20">
                {SocialLinks.map((link) => (
                  <a
                    key={link.id}
                    target={link.target}
                    href={link.href}
                    rel={link.rel}
                  >
                    {link.SocialMediaName}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="copyright text-center pb-20">
                <p>
                  Copyright © {new Date().getFullYear()}. All Right Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-12">
              <div className="payment-mathod pb-20">
                <a href="#">
                  <img
                    src="/static/img/icon-img/payment.png"
                    alt="Card Payments"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
