const projects = [
  {
    title: "Use Amê",
    description: "Loja virtual de Jóias, com direcionamento ao Whatsapp e catalogo de jóias",
    image: "/useAme.png",
  },
  {
    title: "LP7 Imports",
    description: "Loja virtual de roupas esportivas importadas, com galeria e direcionamento ao Whatsapp",
    image: "/lp7.png",
  },
  {
    title: "Home Suite Home",
    description: "Portfolio para empresa de Design de interiores",
    image: "/decoracaoInteriores.png",
  },
  {
    title: "Hamburgueria",
    description: "Cardapio virtual para hamburgueria",
    image: "/hamburgueria.png",
  },
  {
    title: "Gerenciamento de produdos",
    description: "Sistema completo com registro e login para controle de produtos",
    image: "/gerenciamentoDeProdutos.png",
  },
  {
    title: "Barbearia",
    description: "Landing page para barbearia, com direcionamento ao Whatsapp",
    image: "/barbearia.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Últimos Projetos
          </h2>
          <p className="text-gray-600">
            Confira alguns dos sites e sistemas que desenvolvi recentemente
          </p>
        </div>

        {/* Grid 3x3 */}
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
