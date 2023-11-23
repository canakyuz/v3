"use client";

const About = () => {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="about"
      aria-label="About me"
    >
      <div className="mb-12">
        <div className="sticky top-0 z-20 mb-4 w-full bg-slate-100/50 px-6 py-5 backdrop-blur md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 lg:sr-only">
            About
          </h2>
        </div>
        <p className="text-base">
          <span className="text-slate-500">
            I&apos;m a software engineer based in Izmir, Turkey specializing in
            building (and occasionally designing) exceptional websites,
            applications, and everything in between. I graduated from the
            Department of{" "}
          </span>
          <span className="text-slate-900 ">Mathematics</span>
          <span className="text-slate-500">
            {" "}
            at Pamukkale University in Denizli.
          </span>
          <br />
          <br />
          <span className="text-slate-500">I work in the fields of </span>
          <span className="text-slate-900 ">
            web, mobile, data science, machine &amp; deep learning.
          </span>
          <br />
          <br />
          <span className="text-slate-500">
            I am determined to improve myself in these areas. By staying updated
            on the latest technologies and advancements, I strive to get better
            each day in the fields of web, mobile, data science, machine
            learning, and deep learning. My goal is to continually enhance my
            knowledge and expertise, aiming to be more skillful and creative in
            every project.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
