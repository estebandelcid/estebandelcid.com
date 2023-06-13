import Card from "./Card";
import { ProjectCard } from "../components/ProjectCard";
import projects from "../lib/projects";

export default function ListOfCards(){
    return (
      <>
        {/* <Card
          className=" card-styles bg-[url('../public/images/mesh-lapsso.png')]"
          title="Lapsso"
          href="https://www.laps.so/"
          description="The place to store it all"
          technologies="React, Next.js, Typescript, Node.js, Prisma, tRPC, Zustand, Tailwind, ProseMirror, Websockets, ReactQuery Cypress, CI/CD, Github Actions."
        />
        <Card
          className="card-styles bg-[url('../public/images/mesh-petgram.png')]"
          title="Petgram"
          href="https://petgram-edelcid.vercel.app/"
          description="Proyect about photos of pets"
          technologies="React, Next.js, Typescript, StrapiCMS, PWA, CSS Modules, Tailwind, Workbox, IndexedDB, Google Analytics"
        />
        <Card
          className="card-styles bg-[url('../public/images/mesh-theStore.png')]"
          title="The Store"
          href="https://thestore.click/"
          description="A bakery by Ruth Subirachs"
          technologies="React, Next.js, Typescript, StrapiCMS, PWA, CSS Modules, Tailwind, Workbox, IndexedDB, Google Analytics"
        /> */}
        {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
        ))}
      </>
    );
}

            // title={project.title}
            // description={project.description}
            // tech={project.tech}
            // links={project.links}