import { NavLink } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const list = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={handleClose}
          className="hover:scale-110 transition-transform duration-200"
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/education"
          onClick={handleClose}
          className="hover:scale-110 transition-transform duration-200"
          end
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skill"
          onClick={handleClose}
          className="hover:scale-110 transition-transform duration-200"
          end
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          onClick={handleClose}
          className="hover:scale-110 transition-transform duration-200"
          end
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/exp"
          onClick={handleClose}
          className="hover:scale-110 transition-transform duration-200"
          end
        >
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/achievement"
          onClick={handleClose}
          className="hover:scale-110 transition-transform duration-200"
          end
        >
          Achievements
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start my-5">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-ghost lg:hidden text-3xl p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8" // increased size
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>

        <a className="btn btn-ghost text-4xl" href="/">
          Sazzad
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex w-full justify-end">
        <ul className="menu menu-horizontal px-1 text-xl flex-nowrap">
          {list}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={handleClose}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-gray-900 text-white shadow-xl p-4 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="btn btn-ghost mb-4 text-white text-2xl"
            onClick={handleClose}
          >
            ✕
          </button>
          <ul className="menu text-xl">{list}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
