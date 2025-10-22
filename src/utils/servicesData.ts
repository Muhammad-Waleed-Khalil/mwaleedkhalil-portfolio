import servicesData from "@/data/services.json";

export interface Service {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  icon: string;
}

export const allServices: Service[] = servicesData;

export const getServiceById = (id: number): Service | undefined => {
  return allServices.find((service) => service.id === id);
};

export const getServiceByTitle = (title: string): Service | undefined => {
  return allServices.find(
    (service) => service.title.toLowerCase() === title.toLowerCase()
  );
};
