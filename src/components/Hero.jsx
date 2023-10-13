import React, {useState} from "react";
import { About } from "./About";
import { Output } from "./Output";
import { Footer } from "./Footer";

const Hero = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero_header overflow-hidden -mt-[4vh]">
      <nav className="w-full" style={{display: 'flex', justifyContent:'space-between', alignItems:'center', height: '12vh'}}>
        <h3 className="font-semibold cursor-pointer"
        onClick={() => handleNavigation("home")}
        >ScholarSphere</h3>
        <div className="flex gap-8 items-center">
          <h3
            className="cursor-pointer"
            onClick={() => handleNavigation("home")}
          >Home</h3>
          <h3
            className="cursor-pointer"
            onClick={() => handleNavigation("about")}
          >
            About
          </h3>
          <button
            type="button"
            className="black_btn"
            onClick={() => handleNavigation("generate")}
          >
            Generate
          </button>
        </div>
      </nav>
      {currentPage === "home" && (
        <div className="">
          <h1 className="head_text ">
          Bridging Learning Gaps with 
            <br className="max-md:hidden" />
            <span className="orange_gradient">&nbsp;Visual Mastery</span>
          </h1>
          <h2 className="desc m-auto">
            Enter a topic or keyword that piques your curiosity, and we'll uncover
            fascinating facts and a captivating image to expand your knowledge and
            entertain your imagination!
          </h2>
        </div>
      )}
      {currentPage === "about" && <About /> }
      {currentPage === "generate" && <Output />}
      <Footer />
    </header>
  );
};

export { Hero };
