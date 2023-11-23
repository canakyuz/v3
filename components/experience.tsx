"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const data = [
  {
    date: "May 2023 — Sept 2023",
    title: "Frontend Developer",
    company: "TipTopJob",
    location: "Remote",
    description: [
      "Developed user-centric web solutions, utilizing HTML, CSS, and JavaScript. Focused on performance optimization and cross-browser compatibility. Oversaw the redesign of TipTopJob Company's website, resulting in a remarkable 30% boost in user engagement. Engineered a mobile-responsive e-commerce platform, leading to a substantial 40% increase in monthly revenue.",
    ],
    tech: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    date: "Jan 2022 — Feb 2023",
    title: "Frontend Developer",
    company: "RemoteWorker UK",
    location: "Remote",
    description: [
      "Contributed to client-focused web applications by leveraging CSS preprocessors like Sass and Less. Committed to optimizing websites for search engines, culminating in a substantial 25% increase in organic traffic. Played a pivotal role in testing, debugging, and custom plugin development to ensure quick and reliable project deliveries. Championed collaboration efforts for efficient, readable code among the development team.",
    ],
    tech: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Styled Components",
      "GraphQL",
    ],
  },
  {
    date: "Jan 2020 — Oct 2021",
    title: "Frontend Developer",
    company: "Hybrid Heroes",
    location: "Remote",
    description: [
      "Directed the design and development of corporate websites, effectively enhancing the company's digital footprint. Prioritized user experience with responsive designs that catered to mobile devices.Developed compelling, interactive features in various projects, utilizing JavaScript libraries and frameworks like NextJs and React.",
    ],
    tech: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Styled Components",
      "GraphQL",
    ],
  },
];

const Experience = () => {
  return (
    <section
      className="font-exo mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="experience"
      aria-label="Experience"
    >
      <div className="mb-12">
        <div className="group relative pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="sticky top-0 z-20 mb-4 w-full bg-slate-100/50 px-6 py-5 backdrop-blur md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 lg:sr-only">
              Experience
            </h2>
          </div>
          {data.map((data, index) => (
            <Card className="my-12 group relative border-0" key={index}>
              <CardHeader className="flex flex-col items-start">
                <div>
                  <p className="text-slate-700 font-normal text-xs">
                    {data.date}
                  </p>
                </div>
                <div className="flex flex-row items-baseline lg:text-lg text-base">
                  <h3 className="font-semibold text-slate-900 mr-4">
                    {data.title}
                  </h3>
                  <h2 className="font-medium lg:text-base text-sm text-slate-700">{data.company}</h2>
                </div>
              </CardHeader>
              <CardContent>
                <p className="lg:text-base text-sm text-slate-500">{data.description}</p>
              </CardContent>
              <CardFooter>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {data.tech.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center rounded-full bg-teal-200 lg:px-3 lg:py-1 px-[6px] py-[2px] lg:text-sm text-xs font-medium leading-5 text-teal-700 m-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Resume Link */}
      <div className="mt-12">
        <a
          className="inline-flex items-center  leading-tight text-slate-700 font-semibold group"
          aria-label="View Full Résumé"
          href="https://drive.google.com/file/d/1uRVNuXAjf8-YlaUujxDq7qJtqaErXyn8/view?usp=sharing"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full{" "}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Résumé
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Experience;
