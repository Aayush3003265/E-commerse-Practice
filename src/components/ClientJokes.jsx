"use client";
import { useState } from "react";
import React from "react";
import Jokes from "./Jokes";

const client = () => {
  const [jokess, setJokes] = useState();
  
  return (
    <>
      <Jokes jokess={jokess} setJokes={setJokes} />
    </>
  );
};

export default client;
