import React from "react";
import Galerey from "../components/Galerey";
import { useGlobalContext } from "../hook/useGlobalContext";

function LikedImages() {
  const { likedImages } = useGlobalContext();
  return (
    <>
      <Galerey data={{ results: likedImages }} />
    </>
  );
}

export default LikedImages;
