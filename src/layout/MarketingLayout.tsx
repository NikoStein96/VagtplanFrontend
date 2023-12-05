import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function MarketingLayout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <main>
      <header className="border-b-2">
        <div className="h-20 flex justify-between items-center container ">
          <Link to="/">
            {" "}
            <h1 className="uppercase text-4xl">Plan-It</h1>
          </Link>

          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">
                  <Button>Sign Up</Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
    </main>
  );
}

export default MarketingLayout;
