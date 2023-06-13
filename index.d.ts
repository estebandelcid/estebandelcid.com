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

type TProjectLink = {
  url: string;
  title: string;
};