import React, { useEffect } from "react";
import { useRouter } from "next/router";
import WithNavbar from "../../layouts/WithNavbar";
import { useState } from "react";

export default function group() {
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
      <WithNavbar  />
    </>
  );
}
