import React from "react";
import Header from "../header/Header";
import About from "./About";

type Props = {};

function Index({}: Props) {
  return (
    <div>
      <Header
        text="About Me"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <About Notpage={true}/>
    </div>
  );
}

export default Index;
