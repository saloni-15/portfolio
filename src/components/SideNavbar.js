import Profile from "./sidebar_components/Profile";
import NavLinks from "./sidebar_components/NavLinks";
import ContactIcons from "./sidebar_components/ContactIcons";

export default function SideNavbar() {
  return (
    <aside className="flex w-[27rem] flex-col items-center h-full text-white p-3 rounded-r-large">
      <Profile />
      <NavLinks />
      <ContactIcons />
    </aside>
  );
}
