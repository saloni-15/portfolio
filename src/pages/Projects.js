import PageTitle from "../components/UI/PageTitle";
import ProjectsContent from "../data/Projects";

export default function ProjectsPage() {
  return (
    <div className="px-32 pt-24 flex flex-col">
      <PageTitle title="Projects" />
      <ProjectsContent />
    </div>
  );
}
