export default function SkillsTitle({ title }) {
  return (
    <div className="flex flex-row items-center mb-3">
      <span className="w-2/12 rounded-full text-lg bg-dark-blue text-center text-white">
        {title}
      </span>{" "}
      <hr className="w-10/12 h-[3px] border-0 rounded ml-4 bg-slate-700 opacity-10"></hr>
    </div>
  );
}
