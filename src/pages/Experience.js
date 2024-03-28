import PageTitle from "../components/UI/PageTitle";
import { NavLink } from "react-router-dom";
import Button from "../components/UI/Button";
import ExperienceContent from "../data/Experience";

export default function ExperiencePage() {
  return (
    <div className="px-20 pt-16 flex flex-col">
      <PageTitle title="Work Experience" />
      <ExperienceContent
        company="Informatica"
        title="Software Development Engineer Intern"
      >
        <ul id="work-experience-points" className="list-disc ml-4 mt-2]">
          <li>
            Resolved critical bugs, contributing to the overall stability and
            reliability of the Cloud Mass Ingestion feature.
          </li>
          <li>
            Conducted a proof of concept (PoC) for Oracle DB unload partitioning
            for 10 million records, showcasing the potential benefits and
            scalability of the solution.
          </li>
          <li>
            Automated the PoC process for DBMI Unload Partitioning, streamlining
            the testing and evaluation phase.
          </li>
          <li>
            Improved loggings in the Partitioner module, enhancing error
            detection during the unload partitioning process.
          </li>
          <li>
            Implemented comprehensive unit tests for the unload partitioning
            feature, ensuring its stability, functionality, and compatibility
            with different scenarios.
          </li>
          <li>
            Worked with IICS, Java, Springboot, Maven, Perforce, SQL, and NoSQL
            databases.
          </li>
        </ul>
      </ExperienceContent>
      <div className="flex flex-row justify-end mt-[12rem]">
        <NavLink to="/skills" end>
          <Button buttonText="Skills" />
        </NavLink>
      </div>
    </div>
  );
}
