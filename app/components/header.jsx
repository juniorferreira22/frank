import Image from 'next/image';

const Header = () => {
  return (
    <div className="mt-20 last:flex items-center justify-center bg-white">
      <div className="flex w-screen">
        <Image
          src={"/assets/seja.svg"}
          width={160}
          height={48}
          alt="Seja uma arte"
          className="mx-auto my-2.5"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Header;
