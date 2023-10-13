import React, { useState, useEffect, useMemo } from "react";
import { Hero, SideCol, Output, About, Footer } from "./components";
import "./App.css";
import quotes from "./services/quotes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main>
      <Toaster />
      <div className="banner quote">
        Quote of the day:{" "}
        <span>{quotes[Math.floor(Math.random() * quotes.length)]}</span>
      </div>
      <div className="main">
        <div className="gradient" />
        <div className="app">
          {/* <SideCol side="left" /> */}
          <div className="center m-auto w-[80vw]">
            <Hero />
            {/* <Output />
            <About />
            <Footer /> */}
          </div>
          {/* <SideCol side="right" /> */}
        </div>
      </div>
    </main>
  );
};

export default App;
