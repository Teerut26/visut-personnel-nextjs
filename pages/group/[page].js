import React, { useEffect } from "react";
import { useRouter } from "next/router";
import WithNavbar from "../../layouts/WithNavbar";
import { useState } from "react";
import { client } from "../../config/sanity";

export async function getServerSideProps(context) {
    const result = await client.fetch(`*[_type == "group"]{title,slug}`, {});
    return {
      props: { nav_lists: result }, // will be passed to the page component as props
    };
  }

export default function group({nav_lists}) {
  const [Title, setTitle] = useState(null);
  const router = useRouter();
  useEffect(() => {
    let { page } = router.query;
    if (!page) return;
    console.log(page);
    setTitle(page);
  }, [router]);

  return (
    <>
      <WithNavbar navlists={nav_lists}  />
    </>
  );
}
