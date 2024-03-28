import { NavLink } from "react-router-dom";
import PageTitle from "../components/UI/PageTitle";
import AboutContent from "../data/About";
import Button from "../components/UI/Button";

export default function AboutPage() {
  return (
    <div className="px-20 pt-16 flex flex-col">
      <PageTitle title="About Me" />
      <AboutContent />
      <div className="flex flex-row justify-end mt-[11rem]">
        <NavLink to="/work-experience" end>
          <Button buttonText="Work Experience" />
        </NavLink>
      </div>
    </div>
  );
}
