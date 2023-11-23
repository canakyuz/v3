"use client";

const Footer = () => {
  return (
    <p>
      Loosely designed in{" "}
      <a
        href="https://www.figma.com/"
        className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        target="_blank"
        rel="noreferrer"
      >
        Figma
      </a>{" "}
      and coded in{" "}
      <a
        href="https://code.visualstudio.com/"
        className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        target="_blank"
        rel="noreferrer"
      >
        Visual Studio Code
      </a>{" "}
      by yours truly. Built with{" "}
      <a
        href="https://nextjs.org/"
        className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        target="_blank"
        rel="noreferrer"
      >
        Next.js
      </a>{" "}
      and{" "}
      <a
        href="https://tailwindcss.com/"
        className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        target="_blank"
        rel="noreferrer"
      >
        Tailwind CSS
      </a>
      , deployed with{" "}
      <a
        href="https://vercel.com/"
        className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        target="_blank"
        rel="noreferrer"
      >
        Vercel
      </a>
      . All text is set in the{" "}
      <a
        href="https://rsms.me/inter/"
        className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        target="_blank"
        rel="noreferrer"
      >
        Inter
      </a>{" "}
      typeface.
    </p>
  );
};

export default Footer;
