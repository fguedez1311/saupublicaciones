export function Header() {
  return (
     <nav className="py-8 bg-principal-pagina">
        <div className="flex w-9/10 mx-auto justify-between">
            <a href="#" className="relative z-10">
                <img src="/img/logo.png" alt="Logo página" className="logo" />
            </a>
            <label 
                className="
                      relative z-10
                      size-8 
                      bg-cover
                      cursor-pointer
                      transition-all
                      peer/label

                      bg-(image:--icono-menu-cerrado)
                      has-checked:bg-(image:--icono-menu-abierto)
                      md:hidden 
                 "
            >
                <input type="checkbox" name="" id="" 
                className="hidden" />
            </label>
            <ul className="
                text-white absolute inset-0
                bg-principal-pagina 
                flex flex-col gap-8
                justify-center items-center
                -translate-y-full
                peer-has-checked/label:translate-0
                transition-transform
                md:static md:translate-0 md:flex-row
            ">
                <li>
                    <a href="#">Acerca de </a>
                </li>
                <li>
                    <a href="https://alexcgdesign.com/cursocss" className="
                        bg-button text-principal-pagina py-4
                        px-6 rounded-full
                    "
                    >
                    Ingresa al Curso
                </a>
                </li>
            </ul>
        </div>
   </nav>
  );
}