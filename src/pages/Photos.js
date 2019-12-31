import React, { useContext } from "react";
import { Context } from "../Context";

import Image from "../components/Image";
import { getClass } from "../utils";

function Photos() {
  const { pix, loading } = useContext(Context);

  const newPix = pix.map((img, index) => (
    <Image key={img.id} image={img} className={getClass(index)} />
  ));

  return (
    <>
      <main className="photos">{loading ? <h1>Loading...</h1> : newPix}</main>
    </>
  );
}

export default Photos;
