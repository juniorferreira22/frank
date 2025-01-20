import Image from "next/image";
import Link from "next/link";

const ButtonCTA = () => {
return(
    <Link className="text-lg font-medium" href="https://wa.me/5516994125365?text=Olá,%20eu%20gostaria%20de%20realizar%20um%20agendamento.">
        <div className="bg-white text-black w-72 text-center items-center px-12 py-3 m-auto rounded-md">
            <Image
                src="/assets/agende.svg"
                alt="CTA Button"
                width={200}
                height={10}
                className="m-auto"
            />
        </div>
    </Link>
);
};

export default ButtonCTA;