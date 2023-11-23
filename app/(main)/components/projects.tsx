"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Dotion from "../../../public/dotion.jpg";
import Comp from "../../../public/comp.jpg";
import v3 from "../../../public/v3.jpg";
import { Link1Icon } from "@radix-ui/react-icons";

const projects = [
  {
    title: "Notione Clone",
    description:
      "how to create an end-to-end fullstack notion clone, all with proper notion-style editor, cover images, nested documents, publishing documents to public, real-time database and more.",
    link: "https://note-taking-app.canakyuz.vercel.app/",
    image: <Image src={Dotion} alt="Dotion" />,
  },
  {
    title: "AI Companion",
    description:
      "Our AI Companion taps into the power of embeddings and the Pinecone vector database to ensure long-term memory retention, supplemented by the fast caching abilities of the Upstash Redis database. We will also use MySQL and Prisma for storing companions.",
    link: "https://ai-companion-canakyuz.vercel.app/",
    image: <Image src={Comp} alt="AI Companion" />,
  },
  {
    title: "Canakyuz.dev",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    link: "https://canakyuz.dev",
    image: <Image src={v3} alt="Canakyuz.dev" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="lg:py-18 py-16">
      <div className="sticky top-0 z-20 mb-4 w-full bg-slate-100/50 px-6 py-5 backdrop-blur md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 lg:sr-only">
          Projects
        </h2>
      </div>
      {projects.map((project, index) => (
        <Card className="my-12 grid lg:grid-cols-12 w-full" key={index}>
          <div className="lg:col-span-4 lg:pt-6 lg:pl-4 p-2">{project.image}</div>

          <div className="lg:col-span-8">
            <CardHeader>
              <CardTitle className="text-base lg:text-lg">
                {project.title}
                <a href={project.link}>
                  <Link1Icon className="inline-block ml-2 w-5 h-5 text-slate-500" />
                </a>
              </CardTitle>
            </CardHeader>

            <CardContent className="lg:text-base text-sm">
              {project.description}
            </CardContent>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default Projects;
