import Image from "next/image";
import Link from "next/link";

const ButtonCTA = () => (
  <Link
    href="https://wa.me/5516994125365?text=Olá,%20eu%20gostaria%20de%20realizar%20um%20agendamento."
    className="text-lg font-medium"
  >
    <div className="bg-white text-black w-72 text-center px-12 py-3 m-auto rounded-md flex justify-center">
      <Image src="/assets/agende.svg" alt="CTA Button" width={200} height={10} />
    </div>
  </Link>
);

export default ButtonCTA;