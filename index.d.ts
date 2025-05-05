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
  description?: string;
  tech: string;
  workUrl?: TProjectLink[];
  imgs?: TWorksImg[];
  video?: string;
};

type TProjectLink = {
  url: string;
  title: string;
};