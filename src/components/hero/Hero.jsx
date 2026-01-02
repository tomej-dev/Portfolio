import Apresentacao from "./Apresentacao";
import Avatar from "./Avatar";
import ContatoBotao from "./ContatoBotao";

export default function Hero() {
    return(
        <section className="min-h-screen flex items-center justify-center bg-white" id="inicio">
            <div className="flex flex-col items-center text-center px-4">
                <Avatar/>
                <Apresentacao/>
                <ContatoBotao/>
            </div>
        </section>
    )
}