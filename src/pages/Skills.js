import PageTitle from "../components/UI/PageTitle";
import SkillsContent from "../data/Skills";
import { NavLink } from "react-router-dom";
import Button from "../components/UI/Button";

export default function SkillsPage() {
  return (
    <div className="px-20 pt-16 flex flex-col">
      <PageTitle title="Technical Skills" />
      <SkillsContent />
      <div className="flex flex-row justify-end mt-[12rem]">
        <NavLink to="/projects" end>
          <Button buttonText="Projects" />
        </NavLink>
      </div>
    </div>
  );
}
