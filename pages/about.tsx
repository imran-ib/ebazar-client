import React from "react";
import Layout from "components/Layout/Layout";
import Link from "next/link";
import Head from "next/head";

const About = () => {
  return (
    <Layout>
      {" "}
      <Head>
        <title> ebazar | About Us </title>
      </Head>
      <div className="about-story-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="story-img">
                <Link href="/shop">
                  <a>
                    <img
                      src={require("../components/images/about.jpg")}
                      alt="ebazar About Image"
                    />
                  </a>
                </Link>
                <div className="about-logo">
                  <h3>ebazar</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story-details pl-50">
                <div className="story-details-top">
                  <h2>
                    WELCOME TO <span>eBazar</span>
                  </h2>
                  <p>
                    iBazar provide how all this mistaken idea of denouncing
                    pleasure and sing pain was born an will give you a complete
                    account of the system, and expound the actual teachings of
                    the eat explorer.{" "}
                  </p>
                </div>
                <div className="story-details-bottom">
                  <h4>WE START AT 2020</h4>
                  <p>
                    iBazar provide how all this mistaken idea of denouncing
                    pleasure and sing pain was born an will give you a complete
                    account of the system, and expound the actual teachings of
                    the eat explorer.
                  </p>
                </div>
                <div className="story-details-bottom">
                  <h4>WIN BEST ONLINE SHOP AT 2020</h4>
                  <p>
                    iBazar provide how all this mistaken idea of denouncing
                    pleasure and sing pain was born an will give you a complete
                    account of the system, and expound the actual teachings of
                    the eat explorer.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Ares */}
      <div className="banner-area pb-100">
        <div className="container">
          <div className="row d-flex align-items-stretch">
            <div className="col-lg-6 col-md-6 ">
              <div className="single-banner mb-30 text-center scroll-zoom">
                <Link href="/shop">
                  <a>
                    <img
                      height="300px"
                      className="animated"
                      src={require("../components/images/about_0.png")}
                      alt=""
                    />
                  </a>
                </Link>
                <div className="banner-content-3 banner-position-7">
                  <Link href="/shop">
                    <a className="float-left ml-4">Shop Now</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 ">
              <div className="single-banner mb-30 text-center scroll-zoom">
                <Link href="/shop">
                  <a>
                    <img
                      className="animated"
                      src={require("../components/images/about_1.jpg")}
                      alt=""
                    />
                  </a>
                </Link>
                <div className="banner-content-3 banner-position-7">
                  <Link href="/shop">
                    <a className="float-left ml-4">Shop Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
