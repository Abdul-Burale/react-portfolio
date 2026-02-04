export type ProjectLink = {
    label: string;
    href: string;
};

export type ProjectType = {
    id: string;
    title: string;
    description: string;
    impact?: string;
    image: {
        src: string;
        alt: string;
    }
    links: ProjectLink[];
    tags: string[];
    primaryLink: string;
}