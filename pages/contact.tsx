import React from "react";
import Contact from "components/Contact/Contact";
import Layout from "components/Layout/Layout";
import Head from "next/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title> ebazar | Contact </title>
      </Head>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
