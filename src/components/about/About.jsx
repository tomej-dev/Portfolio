export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Sobre mim 👨‍💻
          </h2>
          <p className="text-gray-600">
            Um pouco sobre quem sou e o que me move
          </p>
        </div>

        {/* Conteúdo */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Me chamo <strong>João Tomé</strong>, tenho <strong>21 anos</strong> e
            sou residente de <strong>Dias d&apos;Ávila - BA</strong>.  
            Sou apaixonado por <strong>criação de sites</strong> e sistemas web,
            sempre buscando unir design moderno, performance e boas práticas
            para entregar experiências digitais de qualidade.
          </p>
        </div>

      </div>
    </section>
  );
}
