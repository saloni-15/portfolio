import ProjectButton from "./ProjectButton";

export default function ProjectCard({
  title,
  description,
  techstack,
  imgSrc,
  codeUrl,
  liveUrl,
}) {
  return (
    <div className="m-2 h-50 project-card border-4 border-slate-200 w-1/2 bg-light-blue bg-opacity-15">
      <div className="overlay h-60 flex flex-row items-center justify-center">
        <ProjectButton codeUrl={codeUrl} liveUrl={liveUrl} />
      </div>
      <div href="/" className="flex flex-row blur-in">
        <img
          className="w-1/2 h-60 rounded-[20px] object-cover"
          src={imgSrc}
          alt="image1"
        />

        <div className="m-3">
          <p className="font-semibold text-lg underline">{title}</p>
          <p className="mt-3 text-sm">{description}</p>
          <p className="mt-3">
            <span className="font-semibold text-sm text-slate-900 text-opacity-50">
              Tech Used-
            </span>{" "}
            <span className=" font-medium text-xs ">{techstack}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
