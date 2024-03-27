export default function TimelineBadge({ timeline }) {
  return (
    <p className="pt-2">
      <span className="italic bg-gray-200 p-2 rounded-lg text-slate-600 font-medium">
        {timeline}
      </span>
    </p>
  );
}
