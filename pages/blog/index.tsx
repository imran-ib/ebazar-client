import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {}

const BlogPage = (props: Props) => {
  const Router = useRouter();
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/css/coming-soon.css"
        />

        <title> ebazar |Blogs </title>
      </Head>
      <div className="overlay" />
      <video
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
        src="/static/mp4/bg.mp4"
      ></video>

      <div className="masthead">
        <div className="masthead-bg"></div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 my-auto">
              <div className="masthead-content text-white py-5 py-md-0">
                <h1 className="mb-3">Coming Soon!</h1>
                <p className="mb-5">
                  We're working hard to finish the development of Blogs. Our
                  target launch date is close.
                </p>
                <div className="input-group input-group-newsletter">
                  <div className="input-group-append">
                    <a
                      onClick={() => Router.back()}
                      className="btn btn-secondary"
                      type="button"
                      id="submit-button"
                    >
                      Take Me Back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
