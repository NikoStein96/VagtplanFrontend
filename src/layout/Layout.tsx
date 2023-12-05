import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    console.log(user);
  }, [user]);

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
