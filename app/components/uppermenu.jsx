import Image from 'next/image';

const UpperMenu = () => {
  return (
    <div className="fixed items-center justify-center bg-zinc-950">
      <div className="flex w-screen">
        <Image
          src={"/assets/frank-tattoo.png"}
          width={60}
          height={60}
          alt="Seja uma arte"
          className="mx-auto my-2"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default UpperMenu;
