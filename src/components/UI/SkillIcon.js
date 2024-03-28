export default function SkillIcon({ icon, title }) {
  return (
    <div className="flex flex-col items-center mt-3">
      <div className="border-4 border-slate-700 rounded-full border-opacity-10">
        <img className="h-16 p-[1rem] " src={icon} alt="cpp logo" />
      </div>

      <p className="font-semibold p-1">{title}</p>
    </div>
  );
}
