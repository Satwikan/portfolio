import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

import data from "@constants/data";
import frontUrl from "../frontUrl";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  // console.log("router.asPath", router.asPath)
  const meta = {
    title: "Satwik Anmol - Developer, Writer, Human",
    description: `I've been developing websites for 2 years straight. Get in touch with me to know more.`,
    image: data.avatarUrl,
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${frontUrl}${router.asPath}`} />
        <link rel="canonical" href={`${frontUrl}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Satwik Anmol" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@satwikum" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar path={router.asPath} />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
