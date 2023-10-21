import Header from "../components/Header";
import { IconLayoutDashboard, IconCalendarStats } from "@tabler/icons-react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <main>
      <div className="grid grid-cols-[200px_1fr] h-screen">
        <aside className="border-r-2 flex flex-col items-start">
          <div className="mt-2 p-5 w-full">
            <h1 className="uppercase text-4xl mb-10">Plan-It</h1>
            <nav className="flex flex-col gap-3">
              <div className="flex flex-1 items-center gap-2 bg-blue-100 p-2 border-l-2 border-blue-900">
                <IconLayoutDashboard className="text-blue-500" size={20} />
                <a className="text-blue-500 " href="/">
                  Overview
                </a>
              </div>
              <div className="flex flex-1 items-center gap-2  p-2">
                <IconCalendarStats className="text-gray-500" size={20} />
                <a className="text-gray-500 " href="/">
                  Schedules
                </a>
              </div>
            </nav>
          </div>
        </aside>

        <div>
          <Header />
          <div className="p-10">{children}</div>
        </div>
      </div>
    </main>
  );
}

export default Layout;
