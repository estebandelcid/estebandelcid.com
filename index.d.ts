declare module "classnames";

type TProject = {
  slug: string;
  bgImg: string;
  title: string;
  description: string;
  tech: string;
  projectUrl: string;
  links: TProjectLink[];
};

type TWorks = {
  company: string;
  img?: string;
  role: string;
  description: string;
  tech: string;
  workUrl?: string;
  imgs?: TWorksImg[];
  video?: string;
};

type TProjectLink = {
  url: string;
  title: string;
};