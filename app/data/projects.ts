export interface Project {
    title: string;
    description: string;
    image: string;
    badges: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        title: "Library Management System",
        description: "A comprehensive library management system developed for Benedicto College using Angular framework with Node.js and Express backend. Currently in development.",
        image: "/library.png",
        badges: ["Angular", "TypeScript", "Node.js", "Express"],
    },
];