import ButtonCTA from "./Button";
import Image from "next/image";

const HeroSection = () => (
  <section
    className="flex flex-col w-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/hero.svg')" }}
  >
    <div className="flex flex-col gap-4 justify-center h-full text-center mt-4 text-white px-16">
      {content.map(({ title, text }, index) => (
        <div key={index}>
          <h1 className="text-xl font-bold mb-2 font-jersey">{title}</h1>
          <p className="text-sm mb-2">{text}</p>
        </div>
      ))}
      <p className="text-sm">Hoje será o início da sua próxima jornada!</p>
      <ButtonCTA />
      <Image
        src="/assets/down.svg"
        width={40}
        height={40}
        alt="Go down"
        className="m-auto mb-4"
      />
    </div>
  </section>
);

const content = [
  {
    title: "Sua história merece estar com você.",
    text: "Cada traço carrega cada emoção, cada memória e a essência de quem você é.",
  },
  {
    title: "Delicadeza que fala alto.",
    text: "Transformo ideias na melhor forma de arte com traços finos que revelam a força e a sutileza de cada detalhe.",
  },
  {
    title: "O desenho é só o começo.",
    text: "É sobre criar conexões, sobre ouvir sua história e traduzi-la em algo único e eterno. É sobre você.",
  },
  {
    title: "Arte que toca, inspira e transforma.",
    text: "Deixe sua marca no mundo com quem entende a importância de cada traço. Frank William Tattoo é mais que um estúdio: é o seu “para sempre”.",
  },
];

export default HeroSection;
