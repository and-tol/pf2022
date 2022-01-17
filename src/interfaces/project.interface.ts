export interface IProject {
  _id: string;
  name: string;
  slug: string;
  path: string;
  url: string;
  imageSmall: string;
  image: string;
  technologies: string[];
  description: string;
  message?: string;
  git?: string;
}
