import { useRouter } from "next/router";
import React from "react";

function ExtendedSlug() {
  const router = useRouter();
  const query = router.query;
  console.log(query);

  return (
    <div>
      <h1>Loads extended slug.</h1>
    </div>
  );
}

export default ExtendedSlug;
