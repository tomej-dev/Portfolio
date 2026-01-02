export default function Navigation(){
    return(
        <nav className="flex gap-8 text-gray-800 font-medium text-xl">
  <a
    href="#projetos"
    className="relative group transition"
  >
    Projetos
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a
    href="#sobre"
    className="relative group transition"
  >
    Sobre mim
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a
    href="#contato"
    className="relative group transition"
  >
    Contatos
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
  </a>
</nav>
    )
}