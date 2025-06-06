import { GithubUrl, LinkedinUrl, TwitterUrl } from "../lib/socialLinks";
import ButtonTrigger from "./ButtonTrigger";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-[4rem] mt-24">
      <section className="w-full flex justify-center space-x-12">
        <ButtonTrigger href={LinkedinUrl}>{"Linkedin"}</ButtonTrigger>
        <ButtonTrigger href={GithubUrl}>{"Github"}</ButtonTrigger>
        <ButtonTrigger href={TwitterUrl}>{"Twitter"}</ButtonTrigger>
      </section>
    </footer>
  );
}