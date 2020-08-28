import Head from "next/head";

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/img/favicon/favicon-16x16.png" />

    <meta name="description" content="" />

    {/*<!-- Google / Search Engine Tags -->*/}
    <meta property="name" content="eBazar" />
    <meta
      property="description"
      content="A Fullstack e-commerce Project Build For Demonstration My Skills"
    />
    <meta
      property="image"
      content="https://res.cloudinary.com/iib-webdevs/image/upload/v1598638814/DontDeleteMe/ebazar-1.png"
    />

    {/*<!-- Facebook Meta Tags -->*/}
    <meta property="og:title" content="eBazar" />
    <meta
      property="og:description"
      content="A Fullstack e-commerce Project Build For Demonstration My Skills"
    />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/iib-webdevs/image/upload/v1598638814/DontDeleteMe/ebazar-1.png"
    />
    <meta property="og:url" content="https://demoebazar.com/" />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@_imran_ib" />
    <meta name="twitter:title" content="eBazar" />
    <meta
      name="twitter:description"
      content="A Fullstack e-commerce Project Build For Demonstration My Skills"
    />
    <meta
      name="twitter:image"
      content="https://res.cloudinary.com/iib-webdevs/image/upload/v1598638814/DontDeleteMe/ebazar-1.png"
    />

    <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/icons.min.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/plugins.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/slick/slick.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="/static/css/bootstrap.min.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="/static/css/slick/slick-theme.css"
    />

    <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
    <link rel="stylesheet" href="/static/css/admin/sb-admin-2.min.css" />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <script
      src="//widget.cloudinary.com/global/all.js"
      type="text/javascript"
    />

    <title>ebazar</title>
    {/* Your Map Api Kay Should Go Here */}
  </Head>
);

export default Meta;
