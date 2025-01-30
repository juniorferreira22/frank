import Image from 'next/image';

const Header = () => (
  <header className="mt-20 flex items-center justify-center bg-white w-full">
    <Image
      src="/assets/seja.svg"
      width={160}
      height={48}
      alt="Seja uma arte"
      className="mx-auto my-2.5 object-contain"
    />
  </header>
);

export default Header;
