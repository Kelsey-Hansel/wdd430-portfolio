import ProjectCard from "./ProjectCard";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <section className="grid gap-4 p-8 md:grid-cols-2 text-white"> {projects.map((project) => (
            <ProjectCard
                key={project.title} {...project}
            />
        ))} </section>
    );
}