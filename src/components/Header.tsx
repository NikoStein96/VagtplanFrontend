import { IconLogout } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import kav from "/k4vsc4v.png";

import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Header() {
  return (
    <header className="border-b-2">
      <div className="flex items-center gap-2 justify-end h-20 px-10">
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img className="w-10 h-10 rounded-full" src={kav} alt="" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => signOut(auth)}
                className="flex justify-between"
              >
                Logout <IconLogout className="text-primary" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
