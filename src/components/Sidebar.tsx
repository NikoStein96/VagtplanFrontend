import { IconCalendarStats, IconLayoutDashboard } from "@tabler/icons-react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();
  const links = [
    { title: "Overview", path: "/" },
    { title: "Schedules", path: "/schedules" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === path) {
      return true;
    }
    return pathname.startsWith(path) && path !== "/";
  };

  return (
    <aside className="border-r-2 flex flex-col items-start">
      <div className="mt-2 p-5 w-full">
        <h1 className="uppercase text-4xl mb-10">Plan-It</h1>
        <nav className="flex flex-col gap-3">
          {links.map((link) => {
            return (
              <Link
                className={clsx("flex flex-1 items-center gap-2", {
                  "bg-blue-100 p-2 border-l-2 border-blue-900 text-blue-500":
                    isActive(link.path),
                })}
                key={link.path}
                to={link.path}
              >
                <IconLayoutDashboard size={20} />
                {link.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
