import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-ful mx-auto p-4">
      <div className="flex flex-xol gap-4"></div>
      <p>IT'S TIME TO GET</p>
      <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        FIT<span className="text-blue-400 font-bold">STYLE</span>
      </h1>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that i may become
        <span className="text-blue-400 font-medium">
          {" "}
          unbelievably stylish and fit{" "}
        </span>
        accepting all risks of becoming the local{" "}
        <span className="text-blue-400 font-medium">mass monstrosity</span>,
        afflicted with sever style dysmorphia, unable to fit through doors with
        style
      </p>
      <Button func={() => {
        window.location.href = '#generate'
      }} text={"Accept and Begin"}></Button>
    </div>
  );
}
