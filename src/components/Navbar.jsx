const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full shadow-sm px-36 bg-stone-400/70">
      <div className="navbar bg-base-100 bg-stone-400/10">
        <div className="navbar-start"></div>
        <a className="text-xl btn btn-ghost" href="/">
          PERPUS
        </a>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
