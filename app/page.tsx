import ProjectList from "@/components/ProjectList";
const projects = [
  {
    title: "Your Next Find",
    description: "An app that helps you find a book to read or a playlist to enjoy while reading.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://kelsey-hansel.github.io/wdd330-final-project/",
  },
  {
    title: "Choose Your Adventure Game",
    description: "An app where you choose a character and write your own adventure with a base prompt and character information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://kelsey-hansel.github.io/wdd131/project/character.html",
  }
];

export default function Home() {
  return (
    <main className="bg-white text-black p-8">
      <section className="">
        <h1 className="text-3xl font-bold">Kelsey's Portfolio</h1>
        <p className="text-gray-600">I'm learning Next.js and React. Here are some projects I've put together.</p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}