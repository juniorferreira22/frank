import Image from 'next/image';

const UpperMenu = () => (
  <div className="fixed w-screen flex items-center justify-center bg-zinc-950 py-2">
    <Image
      src="/assets/frank-tattoo.png"
      width={60}
      height={60}
      alt="Seja uma arte"
      className="object-contain"
    />
  </div>
);

export default UpperMenu;
