import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function ContactIcons() {
  return (
    <div className="flex flex-row justify-around mt-8 w-[18rem]">
      <a
        href="mailto: subedisaloni2002@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <BiLogoGmail className="size-[1.35em] opacity-70 hover:opacity-90" />
      </a>
      <a
        href="https://www.linkedin.com/in/saloni-subedi-6939911b5/"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoLinkedin className="size-[1.35em] opacity-70 hover:opacity-90" />
      </a>
      <a
        href="https://x.com/saaloooniiii15?t=aCXeO1Q2wMHgQ0kWXrYE9w&s=09"
        target="_blank"
        rel="noreferrer"
      >
        <FaXTwitter className="size-[1.25em] opacity-70 hover:opacity-90" />
      </a>
      <a href="https://github.com/Saloni-15" target="_blank" rel="noreferrer">
        <FaGithub className="size-[1.25em] opacity-70 hover:opacity-90" />
      </a>
      <a
        href="https://leetcode.com/saloni_02/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode className="size-[1.25em] opacity-70 hover:opacity-90" />
      </a>
    </div>
  );
}
