import Head from "next/head";
import React from "react";

export default function Helmet({ title, discription, image, url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="#ED1C24" />
      <meta name="robots" content="max-image-preview:large" />
      <meta name="description" content={discription} />
      <meta name="keywords" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={discription} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={image}
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:image:secure_url"
        content={image}
      />
      <meta
        name="twitter:image"
        content={image}
      />
      <meta
        name="twitter:domain"
        content={url}
      />
      <meta
        name="category"
        content={title}
      />
      <meta name="SParse:pageclass" content="article" />
      <meta name="SParse:articleid" content={title} />
      <meta name="SParse:category" content={title} />
      <meta
        name="SParse:keyword"
        content={title}
      />
      <link
        rel="apple-touch-icon-precomposed"
        href="/icon.svg"
      />
      <link
        rel="shortcut icon"
        href="/icon.svg"
      />
      <link
        rel="image_src"
        href={image}
      />
      <link
        rel="canonical"
        href={url}
      />
    </Head>
  );
}
