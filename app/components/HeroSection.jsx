import ButtonCTA from "./button";
import Image from "next/image";

const HeroSection = () => {

    return (
        <section className="flex flex-col w-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero.svg')" }}>
            <div className="flex flex-col">
                <div className="flex flex-col gap-4 justify-center h-full text-center mt-4">
                    <div className="text-white px-16">
                        <h1 className="text-xl font-bold mb-2 font-jersey">Sua história merece estar com você.</h1>
                        <p className="text-xs mb-2">Cada traço carrega cada emoção, cada memória e a essência de quem você é.</p>

                        <h1 className="text-xl font-bold mb-2">Delicadeza que fala alto.</h1>
                        <p className="text-xs mb-2">Transformo ideias na melhor forma de arte com traços finos que revelam a força e a sutileza de cada detalhe.</p>

                        <h1 className="text-xl font-bold mb-2">O desenho é só o começo.</h1>
                        <p className="text-xs mb-2">É sobre criar conexões, sobre ouvir sua história e traduzi-la em algo único e eterno. É sobre você.</p>

                        <h1 className="text-xl font-bold mb-2">Arte que toca, inspira e transforma.</h1>
                        <p className="text-xs mb-2">Deixe sua marca no mundo com quem entende a importância de cada traço. Frank William Tattoo é mais que um estúdio: é o seu “para sempre”.</p>
                        
                        <p className="text-xs">Hoje será o início da sua próxima jornada!</p>
                    </div>

                    <ButtonCTA />

                    <div>
                        <Image 
                        src="assets/down.svg"
                        width={40}
                        height={40}
                        alt="Go down"
                        className="m-auto mb-4"
                        />
                    </div>
            </div>
            </div>
        </section>
    );
};

export default HeroSection;