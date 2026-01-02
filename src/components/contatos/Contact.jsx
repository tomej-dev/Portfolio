import { useState } from "react";

export default function Contact() {
    const [nome, setNome] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const texto = `Olá, me chamo ${nome}, vim falar sobre ${assunto} e ${mensagem}`;

        const telefone = "5571999715055"; // coloque seu WhatsApp com DDI + DDD
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");
    }

    return (
        <section id="contato" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Título */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Entre em Contato 📬
                    </h2>
                    <p className="text-gray-600">
                        Tem um projeto em mente? Vamos conversar!
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2 items-start">

                    {/* Infos */}
                    <div className="space-y-8">
                        <ContactItem
                            title="Email"
                            value="joaocarlos8221@gmail.com"
                            icon="✉️"
                        />
                        <ContactItem
                            title="WhatsApp"
                            value="(71) 99971-5055"
                            icon="📞"
                        />
                    </div>

                    {/* Formulário */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Seu nome"
          className="input"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <input
        type="text"
        placeholder="Assunto"
        className="input w-full"
        value={assunto}
        onChange={(e) => setAssunto(e.target.value)}
        required
      />

      <textarea
        placeholder="Sua mensagem..."
        rows="5"
        className="input resize-none"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-full font-medium hover:bg-gray-900 transition"
      >
        ➤ Enviar mensagem
      </button>
    </form>

                </div>
            </div>
        </section>
    );
}

function ContactItem({ title, value, icon }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-gray-600">{value}</p>
            </div>
        </div>
    );
}
