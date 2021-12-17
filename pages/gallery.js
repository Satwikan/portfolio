import React from "react";
import { useEffect } from "react";
import ContainerBlock from "@layouts/ContainerBlock";
import Gallery from "@components/Gallery";

export default function experience() {
  useEffect(() => {
    console.log("EMAIL", process.env.NEXT_PUBLIC_EMAIL);
  }, []);
  return (
    <ContainerBlock title="Satwik Anmol - gallery">
      <Gallery />
    </ContainerBlock>
  );
}
