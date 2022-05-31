import React, { Component, useEffect } from "react";
import userData from "@constants/data";

function Cv() {
  useEffect(() => {
    window.location.href = userData.resumeUrl;
  }, []);
  return null;
}

export default Cv;
