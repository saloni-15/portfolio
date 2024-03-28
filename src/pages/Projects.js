import PageTitle from "../components/UI/PageTitle";
import ProjectsContent from "../data/Projects";

export default function ProjectsPage() {
  return (
    <div className="px-20 pt-16 flex flex-col">
      <PageTitle title="Projects" />
      <ProjectsContent />
    </div>
  );
}
