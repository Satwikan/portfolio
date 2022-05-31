import React, { Component, useEffect } from "react";
import userData from "@constants/data";

function Cv() {
  useEffect(() => {
    window.location.href = userData.resumeUrl;
  }, []);

  return (
    <div>
      <h1>This page is not available</h1>
      <p>You will be redirected to my resume</p>
    </div>
  );
}

export default Cv;
