import { Link, NavLink } from "react-router";
import { useState } from "react";

export function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleMenuToggle = () => setMenuAbierto(!menuAbierto);
  const handleMenuClose = () => setMenuAbierto(false);

  return (
    <nav className="font-jakarta py-8 bg-principal-pagina">
      <div className="flex w-9/10 mx-auto justify-between items-center">
        <Link to="/" className="relative z-10">
          <img src="/img/logo1.png" alt="Logo página" className="w-36 h-auto md:w-48" />
        </Link>
        <button
          className="
            relative z-10
            w-7 h-7
            bg-cover
            cursor-pointer
            transition-all
            md:hidden
          "
          onClick={handleMenuToggle}
          aria-label="Abrir menú"
        >
          <span
            className={
              menuAbierto
                ? "block w-6 h-6 bg-(image:--icono-menu-cerrado)"
                : "block w-full h-full bg-(image:--icono-menu-abierto)"
            }
          ></span>
        </button>
        <ul
          className={`
            text-white absolute inset-0
            bg-principal-pagina 
            flex flex-col gap-8
            justify-center items-center
            transition-transform
            duration-300
            ${menuAbierto ? "translate-y-0" : "-translate-y-full"}
            md:static md:translate-y-0 md:flex-row
          `}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleMenuClose}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="delta"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleMenuClose}
            >
              Estado
            </NavLink>
          </li>
          <li>
            <NavLink
              to="municipio"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleMenuClose}
            >
              Municipio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="parroquia"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleMenuClose}
            >
              Parroquia
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}