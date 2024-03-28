import { NavLink, useLocation } from "react-router-dom";
export default function NavLinks() {
  const location = useLocation();
  const activePath = location.pathname;
  let navClasses =
    "border-opacity-50 text-slate-100 text-sm text-opacity-85 hover:border-[20px] hover:border-opacity-30 hover:text-white border-slate-100 border-[1px] rounded-full w-[220px] h-10 flex items-center justify-center mb-5 relative";
  let activeClass =
    "border-[20px] text-dark-blue text-sm font-[550] border-white rounded-full w-[220px] h-10 flex items-center justify-center mb-5 relative";
  return (
    <>
      <nav className="mt-2">
        <ul className="flex flex-col items-center">
          <li>
            <NavLink
              to="/"
              className={activePath === "/" ? activeClass : navClasses}
              end
            >
              ABOUT ME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work-experience"
              className={
                activePath === "/work-experience" ? activeClass : navClasses
              }
              end
            >
              WORK EXPERIENCE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={activePath === "/skills" ? activeClass : navClasses}
              end
            >
              SKILLS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={activePath === "/projects" ? activeClass : navClasses}
              end
            >
              PROJECTS
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="text-md mt-2 w-[18rem] border-slate-100 border-opacity-10 border-[24px] h-10 rounded-full flex items-center justify-center">
        <a
          className="underline opacity-60"
          href="https://drive.google.com/file/d/1ToitonHt5d6tV8LwwlbIHdJGbBFzFBTy/view"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume ↗
        </a>
      </button>
    </>
  );
}
