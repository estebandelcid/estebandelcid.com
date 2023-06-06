import Card from "./Card";

export default function ListOfCards(){
    return (
      <>
        <Card
          className=" card-styles bg-[url('../assets/mesh-lapsso.png')]"
          title="Lapsso"
          href="https://www.laps.so/"
          description="The place to store it all"
          tecnologies="React, Next.js, Typescript, Node.js, Prisma, tRPC, Zustand, Tailwind, ProseMirror, Websockets, ReactQuery Cypress, CI/CD, Github Actions."
        />
        <Card
          className="card-styles bg-[url('../public/images/mesh-petgram.png')]"
          title="Petgram"
          href="https://petgram-edelcid.vercel.app/"
          description="Proyect about photos of pets"
          tecnologies="React, Next.js, Typescript, StrapiCMS, PWA, CSS Modules, Tailwind, Workbox, IndexedDB, Google Analytics"
        />
        <Card
          className="card-styles bg-[url('../assets/mesh-theStore.png')]"
          title="The Store"
          href="https://thestore.click/"
          description="A bakery by Ruth Subirachs"
          tecnologies="React, Next.js, Typescript, StrapiCMS, PWA, CSS Modules, Tailwind, Workbox, IndexedDB, Google Analytics"
        />
      </>
    );
}