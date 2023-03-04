import React from "react";
import Header from "../header/Header";
import About from "./About";

type Props = {};

function Index({}: Props) {
  return (
    <div>
      <Header
        text="About Me"
        para="Summary of who I am"
      />
      <About Notpage={false}/>
    </div>
  );
}

export default Index;
