interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="p-10 border border-blue-600 bg-sky-500 rounded">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">
                <strong>Technologies:</strong> {technologies.join(", ")}
            </p>
            {link && (
                <p className="">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline">View Project</a>
                </p>
                    
            )}
        </article>
    );
}