import projectsData from "@/data/projects.json";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  year: string;
  github?: string;
  website?: string;
  featured: boolean;
}

export const allProjects: Project[] = projectsData;

export const featuredProjects: Project[] = projectsData.filter(
  (project) => project.featured
);

export const getProjectById = (id: number): Project | undefined => {
  return allProjects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return allProjects.filter((project) => project.category === category);
};
