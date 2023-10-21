import kav from "/k4vsc4v.png";

function Header() {
  return (
    <header className="border-b-2">
      <div className="flex items-center gap-2 justify-end h-20 px-10">
        <div className="relative">
          <img className="w-10 h-10 rounded-full" src={kav} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
