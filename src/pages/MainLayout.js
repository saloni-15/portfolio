import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="w-[27rem]">
        <SideNavbar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
