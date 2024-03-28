export default function ProjectButton({ codeUrl, liveUrl }) {
  return (
    <>
      <a
        id="project-button"
        target="_blank"
        rel="noreferrer"
        className="text-xl font-normal m-2"
        href={codeUrl}
      >
        Code
      </a>
      <a
        id="project-button"
        target="_blank"
        rel="noreferrer"
        className="text-xl font-normal m-2"
        href={liveUrl}
      >
        Live
      </a>
    </>
  );
}
