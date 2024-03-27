import TimelineBadge from "../components/UI/TimelineBadge";

export default function ExperienceContent({ company, title, children }) {
  return (
    <>
      <div className="h-[20rem]">
        <TimelineBadge timeline="July 2022 - July 2023" />
        <p className="mt-3  text-cyan-900">
          <span className="text-[1.75rem] font-bold">{company}</span>
          <span> - </span>
          <span className="text-[1.5rem] font-semibold">{title}</span>
        </p>
        {children}
      </div>
    </>
  );
}
