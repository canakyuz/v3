"use client";

import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "./projects";

const Content = () => {
    return (
      <div className="lg:py-24 py-16 px-8">
        <About />
        <Experience />
        <Projects />
      </div>
    );
}
 
export default Content;