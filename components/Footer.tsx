import { GithubUrl, LinkedinUrl, TwitterUrl } from "../lib/socialLinks";
import ThemeButton from "./ThemeButton";
import ButtonTrigger from "./ButtonTrigger";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-[20px] mt-8">
      <ThemeButton />
      <section className="w-full flex justify-center space-x-12">
        <ButtonTrigger href={LinkedinUrl}>{"Linkedin"}</ButtonTrigger>
        <ButtonTrigger href={GithubUrl}>{"Github"}</ButtonTrigger>
        <ButtonTrigger href={TwitterUrl}>{"Twitter"}</ButtonTrigger>
      </section>
    </footer>
  );
}