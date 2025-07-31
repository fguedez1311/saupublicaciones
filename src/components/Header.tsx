export function Header() {
  return (
     <nav className="font-jakarta py-8 bg-principal-pagina">
        <div className="flex w-9/10 mx-auto justify-between items-center">
            <a href="#" className="relative z-10">
                <img src="/img/logo1.png" alt="Logo página" className="w-40 md:w-52 h-auto" />
            </a>
            <label 
                className="
                      relative z-10
                      size-8 
                      bg-cover
                      cursor-pointer
                      transition-all
                      peer/label

                      bg-(image:--icono-menu-abierto)
                      has-checked:bg-(image:--icono-menu-cerrado)
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
                    <a href="#">Home </a>
                </li>
                 <li>
                    <a href="#">Estado </a>
                </li>
                 <li>
                    <a href="#">Municipio </a>
                </li>
                 <li>
                    <a href="#">Parroquia </a>
                </li>
                    
            </ul>
        </div>
   </nav>
  );
}