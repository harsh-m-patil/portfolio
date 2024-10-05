const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-gray-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="font-jetbrains text-xl font-bold">
          <a href="/">Harsh</a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="font-jetbrains hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="font-jetbrains hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="font-jetbrains hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="font-jetbrains hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
