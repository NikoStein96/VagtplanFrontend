import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <main>
      <div className="grid grid-cols-[200px_1fr] h-screen">
        <Sidebar />

        <div>
          <Header />
          <div className="p-10 h-[calc(100vh-82px)]">{children}</div>
        </div>
      </div>
    </main>
  );
}

export default Layout;
