const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold font-jetbrains">
          <a href="/">Harsh</a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-gray-400 font-jetbrains">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 font-jetbrains">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400 font-jetbrains">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 font-jetbrains">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
